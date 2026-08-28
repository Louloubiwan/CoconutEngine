use crate::State;
use std::sync::Arc;
use winit::{
    event_loop::ActiveEventLoop,
    keyboard::KeyCode,
    window::Window,

};


impl State {
    pub async fn new(window: Arc<Window>) -> anyhow::Result<State> {
        let size = window.inner_size();

        // instance is a handle to our GPU
        // BackendBit::PRIMARY => Vulkan + Metal + DX12 + Browser WebGPU
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            #[cfg(not(target_arch = "wasm32"))]
            backends: wgpu::Backends::PRIMARY,
            #[cfg(target_arch = "wasm32")]
            backends: wgpu::Backends::GL,
            flags: Default::default(),
            memory_budget_thresholds: Default::default(),
            backend_options: Default::default(),
            display: None,
        });

        let surface = instance.create_surface(window.clone()).unwrap();

        let adapter = instance // set the GPU settings
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
                apply_limit_buckets: true,
            }).await?;

        let (device, queue) = adapter // disable and activate some GPU features depending on the GPU
            .request_device(&wgpu::DeviceDescriptor {
                label: None,
                required_features: wgpu::Features::empty(),
                experimental_features: wgpu::ExperimentalFeatures::disabled(),
                // WebGL doesn't support all of wgpu's features, so if
                // we're building for the web we'll have to disable some
                required_limits: if cfg!(target_arch = "wasm32") {
                    wgpu::Limits::downlevel_webgl2_defaults()
                } else {
                    wgpu::Limits::default()
                },
                memory_hints: Default::default(),
                trace: wgpu::Trace::Off,
            }).await?;



        let surface_caps = surface.get_capabilities(&adapter);
        let surface_format = surface_caps.formats.iter().find(|f| f.is_srgb()).copied().unwrap_or(surface_caps.formats[0]);

         let present_mode = if surface_caps.present_modes.contains(&wgpu::PresentMode::Fifo) {
         wgpu::PresentMode::Fifo
        } else {
        surface_caps.present_modes[0]}; // cap FPS at the monitor refresh rate
        
        
        // DEBUG & PRINTS
        //
        let limits = adapter.limits(); // determine the limits of the dimension, can be caused by browser           
        let caps = surface.get_capabilities(&adapter); // check what feature the GPU support
        //
        println!("INFO GPU : {:?}", caps);
        println!("MAX RESOLUTION : {:?}", limits);


    

        let config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT, // define how it will be used in the GPU
            format: surface_format, // define how SurfaceTexture will be stored in GPU
            width: size.width,
            height: size.height,
            present_mode,
            alpha_mode: surface_caps.alpha_modes[0],
            view_formats: vec![],
            desired_maximum_frame_latency: 2,
            color_space: wgpu::SurfaceColorSpace::Auto,
        };

        let _modes = &surface_caps.present_modes;





        //
        // -------------Shaders----------------------
        //
        let shader = device.create_shader_module(wgpu::include_wgsl!("../shader.wgsl"));
        let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("Render Pipeline Layout"),
        bind_group_layouts: &[],
        immediate_size: 0, });

       let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
         label: Some("Render Pipeline"),
         layout: Some(&render_pipeline_layout),
         vertex: wgpu::VertexState {
            module: &shader,
            entry_point: Some("vs_main"), // function from the wgsl 
            buffers: &[],
            compilation_options: wgpu::PipelineCompilationOptions::default(),
        },
        fragment: Some(wgpu::FragmentState {
            module: &shader,
            entry_point: Some("fs_main"), // function from wgsl
            targets: &[Some(wgpu::ColorTargetState { // which color use
                format: config.format,
                blend: Some(wgpu::BlendState::REPLACE),
                write_mask: wgpu::ColorWrites::ALL,
            })],
            compilation_options: wgpu::PipelineCompilationOptions::default(),
        }),

        primitive: wgpu::PrimitiveState { // interpretate to make a triangle
            topology: wgpu::PrimitiveTopology::TriangleList, // 1.
            strip_index_format: None,
            front_face: wgpu::FrontFace::Ccw, // triangle face forward
            cull_mode: Some(wgpu::Face::Back),
            // Setting this to anything other than Fill requires Features::NON_FILL_POLYGON_MODE
            polygon_mode: wgpu::PolygonMode::Fill,
            // Requires Features::DEPTH_CLIP_CONTROL
            unclipped_depth: false,
            // Requires Features::CONSERVATIVE_RASTERIZATION
            conservative: false,
          },


        depth_stencil: None,
         multisample: wgpu::MultisampleState {
            count: 1, // determines how many samples the pipeline will use 
            mask: !0, // specifies which samples should be active
            alpha_to_coverage_enabled: false, // antialiasing
         },
        multiview_mask: None, // indicates how many array layers the render attachments can have
        cache: None, 

       });


      Ok(State {
        surface,
        device,
        queue,
        config,
        is_surface_configured: false,
        render_pipeline,
        window,

        })
  }



// ---------------------------------------------------------------------------
//
//



    pub fn resize(&mut self, width: u32, height: u32) {
        if width > 0 && height > 0 {
             let max = 2048; // ajoute une limite pour WebGL
            self.config.width = width.min(max);
            self.config.height = height.min(max);
            self.surface.configure(&self.device, &self.config);
            self.is_surface_configured = true;
        }
    }

    // Escape exit the app
    pub fn handle_key(&self, event_loop: &ActiveEventLoop, code: KeyCode, is_pressed: bool) {
    match (code, is_pressed) {
        (KeyCode::Escape, true) => event_loop.exit(),
        _ => {}
        }
    }

        
    pub fn handle_mouse_moved(&mut self, _position: winit::dpi::PhysicalPosition<f64>){

        println!("MOUSE MOVED");
    

    }





// ------------------ RENDER---------------------
    //
   pub fn render(&mut self) -> anyhow::Result<()> {
     self.window.request_redraw();

     // We can't render unless the surface is configured
     if !self.is_surface_configured {
        return Ok(());
      }
        
      let output = match self.surface.get_current_texture() {
            wgpu::CurrentSurfaceTexture::Success(surface_texture) => surface_texture,
            wgpu::CurrentSurfaceTexture::Suboptimal(surface_texture) => {
                surface_texture
            }
            wgpu::CurrentSurfaceTexture::Timeout
            | wgpu::CurrentSurfaceTexture::Occluded
            | wgpu::CurrentSurfaceTexture::Validation => {
                // Skip this frame
                return Ok(());
            }
            wgpu::CurrentSurfaceTexture::Outdated => {
                self.surface.configure(&self.device, &self.config);
                return Ok(());
            }
            wgpu::CurrentSurfaceTexture::Lost => {
                // You could recreate the devices and all resources
                // created with it here, but we'll just bail
                anyhow::bail!("Lost device");
            }
        };

        let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());

        let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
        label: Some("Render Encoder"),});


        {
        let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("Render Pass"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                depth_slice: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color {
                        r: 0.6,
                        g: 0.2,
                        b: 0.3,
                        a: 1.0,
                    }),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            occlusion_query_set: None,
            timestamp_writes: None,
            multiview_mask: None,
        });
        render_pass.set_pipeline(&self.render_pipeline); // 2.
        render_pass.draw(0..3, 0..1); // 3.
    }

     // submit will accept anything that implements IntoIter
     self.queue.submit(std::iter::once(encoder.finish()));
     self.queue.present(output);

     Ok(())

     }

   pub fn update(&mut self) {
    // remo
    }


}

// --------------------
