// Vertex shader

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>, // said to the gpu what value use
};

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
) -> VertexOutput {
    var out: VertexOutput; // refer to the struct just on top
    let x = f32(1 - i32(in_vertex_index)) * 0.5; // coordonates x and y
    let y = f32(i32(in_vertex_index & 1u) * 2 - 1) * 0.5;
    out.clip_position = vec4<f32>(x, y, 0.0, 1.0); // return the position
    return out;
}



// Fragment shader

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(0.05, 0.05, 0.8, 1.0); // set the color
}

