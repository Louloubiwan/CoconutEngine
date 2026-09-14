export function run_web() {
    wasm.run_web();
}
export function __wbg_Window_afcc911b2f9c92e2(arg0) {
    const ret = getObject(arg0).Window;
    return addHeapObject(ret);
}
export function __wbg_Window_c7f91e3f80ae0a0e(arg0) {
    const ret = getObject(arg0).Window;
    return addHeapObject(ret);
}
export function __wbg_WorkerGlobalScope_5d19ebc889ff397e(arg0) {
    const ret = getObject(arg0).WorkerGlobalScope;
    return addHeapObject(ret);
}
export function __wbg___wbindgen_boolean_get_fa956cfa2d1bd751(arg0) {
    const v = getObject(arg0);
    const ret = typeof(v) === 'boolean' ? v : undefined;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
}
export function __wbg___wbindgen_debug_string_c25d447a39f5578f(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_1ff95bcc5517c252(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_null_ea9085d691f535d3(arg0) {
    const ret = getObject(arg0) === null;
    return ret;
}
export function __wbg___wbindgen_is_string_ea5e6cc2e4141dfe(arg0) {
    const ret = typeof(getObject(arg0)) === 'string';
    return ret;
}
export function __wbg___wbindgen_is_undefined_c05833b95a3cf397(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
}
export function __wbg___wbindgen_number_get_394265ed1e1b84ee(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_string_get_b0ca35b86a603356(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_344f42d3211c4765(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_fffb441def202758(arg0) {
    getObject(arg0)._wbg_cb_unref();
}
export function __wbg_abort_8bae0f33e7833997(arg0) {
    getObject(arg0).abort();
}
export function __wbg_activeElement_4bc99dc1a7094c27(arg0) {
    const ret = getObject(arg0).activeElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_activeTexture_92b04d918019d603(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
}
export function __wbg_activeTexture_d12958674e97a118(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
}
export function __wbg_addEventListener_d85450ee1320c989() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_addListener_b5b7f95360b22984() { return handleError(function (arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
}, arguments); }
export function __wbg_altKey_50f830d1793a2eea(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_altKey_f3e24c4c9cfcf271(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_animate_8f41e2f47c7d04ab(arg0, arg1, arg2) {
    const ret = getObject(arg0).animate(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_appendChild_f553e8704c4f14a6() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_attachShader_5f7f4077e124e23b(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
}
export function __wbg_attachShader_8971266b4c9bc514(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
}
export function __wbg_beginQuery_042a1f99e870066c(arg0, arg1, arg2) {
    getObject(arg0).beginQuery(arg1 >>> 0, getObject(arg2));
}
export function __wbg_beginRenderPass_aa22c432e793359a() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).beginRenderPass(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_bindAttribLocation_0fe5da7e01ac0d15(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).bindAttribLocation(getObject(arg1), arg2 >>> 0, getStringFromWasm0(arg3, arg4));
}
export function __wbg_bindAttribLocation_94202d7a59ab7863(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).bindAttribLocation(getObject(arg1), arg2 >>> 0, getStringFromWasm0(arg3, arg4));
}
export function __wbg_bindBufferRange_f5c29912db0476e9(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).bindBufferRange(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5);
}
export function __wbg_bindBuffer_1e00cfb4321ef9a4(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindBuffer_a01497b1abdcdd9a(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindFramebuffer_390311eff3896937(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindFramebuffer_658e4b06f7ee8bb4(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindRenderbuffer_75e8469e930840fa(arg0, arg1, arg2) {
    getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindRenderbuffer_c3d0c4b8cd1c3891(arg0, arg1, arg2) {
    getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindSampler_ce608f0de9d31acf(arg0, arg1, arg2) {
    getObject(arg0).bindSampler(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindTexture_28eff4bbd8aaab54(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindTexture_9b04b1b7c00d4dd6(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
}
export function __wbg_bindVertexArrayOES_5cad2205a17e8990(arg0, arg1) {
    getObject(arg0).bindVertexArrayOES(getObject(arg1));
}
export function __wbg_bindVertexArray_427eeac0c1764d8a(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
}
export function __wbg_blendColor_793b560dc69ddd0b(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendColor(arg1, arg2, arg3, arg4);
}
export function __wbg_blendColor_eae0cd578a2c7d15(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendColor(arg1, arg2, arg3, arg4);
}
export function __wbg_blendEquationSeparate_043e2f50f6ecb2d3(arg0, arg1, arg2) {
    getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blendEquationSeparate_c7e2b2261c94e1c5(arg0, arg1, arg2) {
    getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blendEquation_455b8986ededabc0(arg0, arg1) {
    getObject(arg0).blendEquation(arg1 >>> 0);
}
export function __wbg_blendEquation_f5c5272993f6cb01(arg0, arg1) {
    getObject(arg0).blendEquation(arg1 >>> 0);
}
export function __wbg_blendFuncSeparate_37156309688f8f88(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_blendFuncSeparate_3ee6d939a9f3938b(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_blendFunc_114dc7056ccfeb8d(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blendFunc_a854d7e4459150ba(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blitFramebuffer_a1215976f663b058(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
}
export function __wbg_blockSize_5af477b962b2b031(arg0) {
    const ret = getObject(arg0).blockSize;
    return ret;
}
export function __wbg_body_40ec34e0a2931fe8(arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_brand_3bc196a43eceb8af(arg0, arg1) {
    const ret = getObject(arg1).brand;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_brands_b7dcf262485c3e7c(arg0) {
    const ret = getObject(arg0).brands;
    return addHeapObject(ret);
}
export function __wbg_bufferData_073a7c6abef7a55f(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
}
export function __wbg_bufferData_3d4f29bdfb1fa46c(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferData_90ef588bac2be2f5(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
}
export function __wbg_bufferData_ce4f44d56e9ddab5(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferSubData_bae930b21e9c1c48(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
}
export function __wbg_bufferSubData_ce9854d3d337e2cf(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
}
export function __wbg_button_f6a9a7b725f1838e(arg0) {
    const ret = getObject(arg0).button;
    return ret;
}
export function __wbg_buttons_d8acd46cf8f40ae9(arg0) {
    const ret = getObject(arg0).buttons;
    return ret;
}
export function __wbg_cancelAnimationFrame_086d6084925c4e06() { return handleError(function (arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
}, arguments); }
export function __wbg_cancelIdleCallback_b9e469156370a1e5(arg0, arg1) {
    getObject(arg0).cancelIdleCallback(arg1 >>> 0);
}
export function __wbg_cancel_65f38182e2eeac5c(arg0) {
    getObject(arg0).cancel();
}
export function __wbg_catch_c1a60df4c30d76d3(arg0, arg1) {
    const ret = getObject(arg0).catch(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_clearBufferfv_2e0f1a0ea56de859(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_clearBufferiv_0360269bf6e34c54(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
}
export function __wbg_clearBufferuiv_df94a395d4915377(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
}
export function __wbg_clearDepth_8b5d226aae155082(arg0, arg1) {
    getObject(arg0).clearDepth(arg1);
}
export function __wbg_clearDepth_ca9b22d41551b513(arg0, arg1) {
    getObject(arg0).clearDepth(arg1);
}
export function __wbg_clearStencil_58f2af46612bccae(arg0, arg1) {
    getObject(arg0).clearStencil(arg1);
}
export function __wbg_clearStencil_a66fe23df6313fc7(arg0, arg1) {
    getObject(arg0).clearStencil(arg1);
}
export function __wbg_clearTimeout_8f80437be2324e09(arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
}
export function __wbg_clear_53d71d234e14e4c1(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
}
export function __wbg_clear_dd06a0da4ce8e13f(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
}
export function __wbg_clientWaitSync_cf8e49f8ba228377(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).clientWaitSync(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
    return ret;
}
export function __wbg_close_3423cc7dafc477bb(arg0) {
    getObject(arg0).close();
}
export function __wbg_code_89c999e407c79eef(arg0, arg1) {
    const ret = getObject(arg1).code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_colorMask_44ebb91cad2502f2(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
}
export function __wbg_colorMask_a4d164c2039b5731(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
}
export function __wbg_compileShader_9bdfd792722cf704(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
}
export function __wbg_compileShader_fc2e4b73240d4fd7(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
}
export function __wbg_compressedTexSubImage2D_c1362291573c7268(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
}
export function __wbg_compressedTexSubImage2D_da01674d2975d1ae(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, getObject(arg8));
}
export function __wbg_compressedTexSubImage2D_dd6dc580749eb5cf(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, getObject(arg8));
}
export function __wbg_compressedTexSubImage3D_04cb8b046c4321fe(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
}
export function __wbg_compressedTexSubImage3D_af0228a80ffd5993(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, getObject(arg10));
}
export function __wbg_configure_0e4789c0f6b35c8e() { return handleError(function (arg0, arg1) {
    getObject(arg0).configure(getObject(arg1));
}, arguments); }
export function __wbg_contains_7189b09a477442a6(arg0, arg1) {
    const ret = getObject(arg0).contains(getObject(arg1));
    return ret;
}
export function __wbg_contentRect_1d6e15e2e0d3e3c3(arg0) {
    const ret = getObject(arg0).contentRect;
    return addHeapObject(ret);
}
export function __wbg_copyBufferSubData_cdf61f74aa6e0902(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
}
export function __wbg_copyTexSubImage2D_8daea651fc408645(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
}
export function __wbg_copyTexSubImage2D_c73f91f1d7022402(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
}
export function __wbg_copyTexSubImage3D_bfe7a14dac9ad777(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
}
export function __wbg_createBuffer_01568a9d930d90dd(arg0) {
    const ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createBuffer_0726dd2ab09ea1d2() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createBuffer(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createBuffer_2075765bde5035d5(arg0) {
    const ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createCommandEncoder_ec1f40f0cb4d09df(arg0, arg1) {
    const ret = getObject(arg0).createCommandEncoder(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createElement_fcbc0805de826d62() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createFramebuffer_b24d2c80a8b9e7cc(arg0) {
    const ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createFramebuffer_de0d521f546e7534(arg0) {
    const ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createObjectURL_416e527781e6fd6d() { return handleError(function (arg0, arg1) {
    const ret = URL.createObjectURL(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_createPipelineLayout_2c8cd4528b06c108(arg0, arg1) {
    const ret = getObject(arg0).createPipelineLayout(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createProgram_118becaac3a20318(arg0) {
    const ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createProgram_538c9777a4ac084f(arg0) {
    const ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createQuery_047c7c524e4ac4f8(arg0) {
    const ret = getObject(arg0).createQuery();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createRenderPipeline_cf98d4d699bfb03c() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createRenderPipeline(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createRenderbuffer_71af5c0d615e9271(arg0) {
    const ret = getObject(arg0).createRenderbuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createRenderbuffer_9d801bf44c314f44(arg0) {
    const ret = getObject(arg0).createRenderbuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createSampler_70c8392d98896235(arg0) {
    const ret = getObject(arg0).createSampler();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createShaderModule_2e44fc7677c6288b(arg0, arg1) {
    const ret = getObject(arg0).createShaderModule(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createShader_78bc8b7e9a88e1a8(arg0, arg1) {
    const ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createShader_7d139f2d50f77365(arg0, arg1) {
    const ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createTexture_0ee0fa5f924f3d14(arg0) {
    const ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createTexture_d13f98e0d3d912f4(arg0) {
    const ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createVertexArrayOES_2fa3e59eebd5f674(arg0) {
    const ret = getObject(arg0).createVertexArrayOES();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createVertexArray_baf9eef7ea5a2c7a(arg0) {
    const ret = getObject(arg0).createVertexArray();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_createView_ceaf2f5881adbd34() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createView(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_ctrlKey_2e52816fa7160097(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_ctrlKey_50bd8324959ca786(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_cullFace_62bbea3bef0e6b99(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
}
export function __wbg_cullFace_f1c75ae19b07eaf3(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
}
export function __wbg_debug_87fd9b1a625b7efb(arg0) {
    console.debug(getObject(arg0));
}
export function __wbg_deleteBuffer_08eb938e35c27967(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
}
export function __wbg_deleteBuffer_1ca3ffe668a488e7(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
}
export function __wbg_deleteFramebuffer_963cd69957209d37(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
}
export function __wbg_deleteFramebuffer_d1a36e889b009344(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
}
export function __wbg_deleteProgram_09bd45a51105b2f6(arg0, arg1) {
    getObject(arg0).deleteProgram(getObject(arg1));
}
export function __wbg_deleteProgram_132e191baa9fa84f(arg0, arg1) {
    getObject(arg0).deleteProgram(getObject(arg1));
}
export function __wbg_deleteQuery_0d1dcc4402a86ee1(arg0, arg1) {
    getObject(arg0).deleteQuery(getObject(arg1));
}
export function __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a(arg0, arg1) {
    getObject(arg0).deleteRenderbuffer(getObject(arg1));
}
export function __wbg_deleteRenderbuffer_ca999f7883b777af(arg0, arg1) {
    getObject(arg0).deleteRenderbuffer(getObject(arg1));
}
export function __wbg_deleteSampler_0abb528566c4ab3b(arg0, arg1) {
    getObject(arg0).deleteSampler(getObject(arg1));
}
export function __wbg_deleteShader_3120790d36063afe(arg0, arg1) {
    getObject(arg0).deleteShader(getObject(arg1));
}
export function __wbg_deleteShader_993edb4beb3c4d53(arg0, arg1) {
    getObject(arg0).deleteShader(getObject(arg1));
}
export function __wbg_deleteSync_9b0e43580942a0f6(arg0, arg1) {
    getObject(arg0).deleteSync(getObject(arg1));
}
export function __wbg_deleteTexture_2b163b157ea1be24(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
}
export function __wbg_deleteTexture_bdc2202d7a50dcea(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
}
export function __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa(arg0, arg1) {
    getObject(arg0).deleteVertexArrayOES(getObject(arg1));
}
export function __wbg_deleteVertexArray_475d4e969aac1dd0(arg0, arg1) {
    getObject(arg0).deleteVertexArray(getObject(arg1));
}
export function __wbg_deltaMode_d869228efd74f393(arg0) {
    const ret = getObject(arg0).deltaMode;
    return ret;
}
export function __wbg_deltaX_5d829ffba565ed10(arg0) {
    const ret = getObject(arg0).deltaX;
    return ret;
}
export function __wbg_deltaY_6cfce8f8da250c23(arg0) {
    const ret = getObject(arg0).deltaY;
    return ret;
}
export function __wbg_depthFunc_455cfeb8a9d2fb4c(arg0, arg1) {
    getObject(arg0).depthFunc(arg1 >>> 0);
}
export function __wbg_depthFunc_74a8f8acf8973c86(arg0, arg1) {
    getObject(arg0).depthFunc(arg1 >>> 0);
}
export function __wbg_depthMask_4bd6c73b1339d257(arg0, arg1) {
    getObject(arg0).depthMask(arg1 !== 0);
}
export function __wbg_depthMask_a644a67deced3257(arg0, arg1) {
    getObject(arg0).depthMask(arg1 !== 0);
}
export function __wbg_depthRange_38b2287ffbea14fd(arg0, arg1, arg2) {
    getObject(arg0).depthRange(arg1, arg2);
}
export function __wbg_depthRange_5e90d4d236280ff5(arg0, arg1, arg2) {
    getObject(arg0).depthRange(arg1, arg2);
}
export function __wbg_destroy_fe937f756bf8df37(arg0) {
    getObject(arg0).destroy();
}
export function __wbg_devicePixelContentBoxSize_dca8701a53307aca(arg0) {
    const ret = getObject(arg0).devicePixelContentBoxSize;
    return addHeapObject(ret);
}
export function __wbg_devicePixelRatio_1c0e0ed7deb19cd8(arg0) {
    const ret = getObject(arg0).devicePixelRatio;
    return ret;
}
export function __wbg_disableVertexAttribArray_160060fbd7e97de0(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_disableVertexAttribArray_c7915eb0de6dd8f1(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_disable_1659d1b7d50c31e7(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
}
export function __wbg_disable_40c3975167c1ee07(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
}
export function __wbg_disconnect_39bfdcb35b1fc7b9(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_disconnect_491a6bfd82cdd887(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_document_179650d6cb13c263(arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
}
export function __wbg_drawArraysInstanced_51b161548a3f10c4(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
}
export function __wbg_drawArrays_676becae0149ed65(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
}
export function __wbg_drawArrays_b0c59a6e158122f2(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
}
export function __wbg_drawBuffersWEBGL_c9b47f7f207125cf(arg0, arg1) {
    getObject(arg0).drawBuffersWEBGL(getObject(arg1));
}
export function __wbg_drawBuffers_1c1ec9b292442a2a(arg0, arg1) {
    getObject(arg0).drawBuffers(getObject(arg1));
}
export function __wbg_drawElementsInstancedANGLE_9b58c4013373b180(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_drawElementsInstanced_c7f96ea02e6d5326(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_draw_6877f98847e1e36c(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_enableVertexAttribArray_4c08219124740f14(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_enableVertexAttribArray_7470ba2dcf2606e3(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_enable_28bbeed576131d1f(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
}
export function __wbg_enable_611804c0ac1504ce(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
}
export function __wbg_endQuery_a50f7fc49cfe56e9(arg0, arg1) {
    getObject(arg0).endQuery(arg1 >>> 0);
}
export function __wbg_end_f99ebed53d4e198a(arg0) {
    getObject(arg0).end();
}
export function __wbg_error_744744ff0c9861e6(arg0) {
    console.error(getObject(arg0));
}
export function __wbg_error_7ed559cd7146b49d(arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
}
export function __wbg_error_a6fa202b58aa1cd3(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_fenceSync_fe2cdba4a0d73679(arg0, arg1, arg2) {
    const ret = getObject(arg0).fenceSync(arg1 >>> 0, arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_finish_126e6f2ac71e3096(arg0) {
    getObject(arg0).finish();
}
export function __wbg_finish_4d91de5e927dd13f(arg0, arg1) {
    const ret = getObject(arg0).finish(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_finish_6e06b68ab68cd9f6(arg0) {
    const ret = getObject(arg0).finish();
    return addHeapObject(ret);
}
export function __wbg_finish_cbe7ec8675dd7705(arg0) {
    getObject(arg0).finish();
}
export function __wbg_flush_db77b4a63d6b337d(arg0) {
    getObject(arg0).flush();
}
export function __wbg_flush_e03c08da6863b5ab(arg0) {
    getObject(arg0).flush();
}
export function __wbg_focus_2f77051f98540625() { return handleError(function (arg0) {
    getObject(arg0).focus();
}, arguments); }
export function __wbg_framebufferRenderbuffer_4404cf9f9cb76937(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
}
export function __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
}
export function __wbg_framebufferTexture2D_3c2abd606fc53f31(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
}
export function __wbg_framebufferTexture2D_e1fb64212fcda219(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
}
export function __wbg_framebufferTextureLayer_f2d9db097bfbb863(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5);
}
export function __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).framebufferTextureMultiviewOVR(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5, arg6);
}
export function __wbg_frontFace_29ef7151de8b5ed9(arg0, arg1) {
    getObject(arg0).frontFace(arg1 >>> 0);
}
export function __wbg_frontFace_fc6d98dafa42de87(arg0, arg1) {
    getObject(arg0).frontFace(arg1 >>> 0);
}
export function __wbg_fullscreenElement_9f50a5e63bb433a8(arg0) {
    const ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getBufferSubData_11018928c908ac2c(arg0, arg1, arg2, arg3) {
    getObject(arg0).getBufferSubData(arg1 >>> 0, arg2, getObject(arg3));
}
export function __wbg_getCoalescedEvents_366947e5550da21b(arg0) {
    const ret = getObject(arg0).getCoalescedEvents();
    return addHeapObject(ret);
}
export function __wbg_getCoalescedEvents_3e003f63d9ebbc05(arg0) {
    const ret = getObject(arg0).getCoalescedEvents;
    return addHeapObject(ret);
}
export function __wbg_getComputedStyle_961681bdf7e518e8() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getComputedStyle(getObject(arg1));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_7476e39fa008047e() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_ca12bb65aab778a4() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_e79ddf6a9cb3cc76() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_fd298c901058eb31() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getCurrentTexture_20714d1bd9051cab() { return handleError(function (arg0) {
    const ret = getObject(arg0).getCurrentTexture();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getElementById_1cbd8f06dbe8eb8e(arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getExtension_101c7e41de3e4d90() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getIndexedParameter_6d7a5bcccaa0f3e2() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getMappedRange_d0bf3141224111b6() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getMappedRange(arg1, arg2);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getOwnPropertyDescriptor_543d91136adb7c16(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_getParameter_039a5899307fab55() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getParameter(arg1 >>> 0);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getParameter_d39f59581389af1b() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getParameter(arg1 >>> 0);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getPreferredCanvasFormat_8b57039d1801a506(arg0) {
    const ret = getObject(arg0).getPreferredCanvasFormat();
    return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 102) - 1;
}
export function __wbg_getProgramInfoLog_c4762e0513468a26(arg0, arg1, arg2) {
    const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getProgramInfoLog_d1ce570463a68779(arg0, arg1, arg2) {
    const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getProgramParameter_b9995b56c258ac86(arg0, arg1, arg2) {
    const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getProgramParameter_c8d1154fbb3c0890(arg0, arg1, arg2) {
    const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getPropertyValue_dc6b061239dad6f1() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_getQueryParameter_919125495ccb17ca(arg0, arg1, arg2) {
    const ret = getObject(arg0).getQueryParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getShaderInfoLog_5cee2add982c7165(arg0, arg1, arg2) {
    const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getShaderInfoLog_bc236afe696c1283(arg0, arg1, arg2) {
    const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getShaderParameter_3394e75dcb97f380(arg0, arg1, arg2) {
    const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getShaderParameter_cbcc0995e8e16214(arg0, arg1, arg2) {
    const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getSupportedExtensions_2a7458ec45e82560(arg0) {
    const ret = getObject(arg0).getSupportedExtensions();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getSupportedProfiles_90a4f330938d0241(arg0) {
    const ret = getObject(arg0).getSupportedProfiles();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getSyncParameter_d8f6c145657a3550(arg0, arg1, arg2) {
    const ret = getObject(arg0).getSyncParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_getUniformBlockIndex_cfee6ff6d323c784(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformBlockIndex(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return ret;
}
export function __wbg_getUniformLocation_24ef46cdda2148ab(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getUniformLocation_788a34295dd6fabe(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_get_507a50627bffa49b(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}
export function __wbg_get_b2053e9bfdf3ca8e(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_get_unchecked_6e0ad6d2a41b06f6(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}
export function __wbg_gpu_2ccc250735d24a2a(arg0) {
    const ret = getObject(arg0).gpu;
    return addHeapObject(ret);
}
export function __wbg_height_9f27216001e3c804(arg0) {
    const ret = getObject(arg0).height;
    return ret;
}
export function __wbg_includes_78c9a3115b08eddc(arg0, arg1, arg2) {
    const ret = getObject(arg0).includes(getObject(arg1), arg2);
    return ret;
}
export function __wbg_info_eadbe775a8e2e9eb(arg0) {
    console.info(getObject(arg0));
}
export function __wbg_inlineSize_3c8412828bef21eb(arg0) {
    const ret = getObject(arg0).inlineSize;
    return ret;
}
export function __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof HTMLCanvasElement;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof WebGL2RenderingContext;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Window_05ba1ee4f6781663(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_invalidateFramebuffer_343bbfb15e6835fd() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).invalidateFramebuffer(arg1 >>> 0, getObject(arg2));
}, arguments); }
export function __wbg_isIntersecting_fc6d9529a49c5d62(arg0) {
    const ret = getObject(arg0).isIntersecting;
    return ret;
}
export function __wbg_is_7b9d0b289033c7de(arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
}
export function __wbg_key_803dca86cdcfa8dd(arg0, arg1) {
    const ret = getObject(arg1).key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_label_7ed42f25f841996b(arg0, arg1) {
    const ret = getObject(arg1).label;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_length_1f0964f4a5e2c6d8(arg0) {
    const ret = getObject(arg0).length;
    return ret;
}
export function __wbg_length_370319915dc99107(arg0) {
    const ret = getObject(arg0).length;
    return ret;
}
export function __wbg_limits_20c6f56636df7d38(arg0) {
    const ret = getObject(arg0).limits;
    return addHeapObject(ret);
}
export function __wbg_linkProgram_4e047fb3197a0348(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
}
export function __wbg_linkProgram_d7c71c539c8c6a43(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
}
export function __wbg_location_8f24df2c257fb974(arg0) {
    const ret = getObject(arg0).location;
    return ret;
}
export function __wbg_log_d267660666346fb3(arg0) {
    console.log(getObject(arg0));
}
export function __wbg_mapAsync_52b01fa9e8f765fd(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).mapAsync(arg1 >>> 0, arg2, arg3);
    return addHeapObject(ret);
}
export function __wbg_matchMedia_9968278b31706f78() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_matches_978994974df1e85b(arg0) {
    const ret = getObject(arg0).matches;
    return ret;
}
export function __wbg_maxBindGroupsPlusVertexBuffers_33e5006b23e20478(arg0) {
    const ret = getObject(arg0).maxBindGroupsPlusVertexBuffers;
    return ret;
}
export function __wbg_maxBindGroups_f6d26f3a67826666(arg0) {
    const ret = getObject(arg0).maxBindGroups;
    return ret;
}
export function __wbg_maxBindingsPerBindGroup_edab2e8dabbf6060(arg0) {
    const ret = getObject(arg0).maxBindingsPerBindGroup;
    return ret;
}
export function __wbg_maxBufferSize_bbc69284c14aa7da(arg0) {
    const ret = getObject(arg0).maxBufferSize;
    return ret;
}
export function __wbg_maxColorAttachmentBytesPerSample_63ebe4f81de2f34c(arg0) {
    const ret = getObject(arg0).maxColorAttachmentBytesPerSample;
    return ret;
}
export function __wbg_maxColorAttachments_aed8c38beabf3a5c(arg0) {
    const ret = getObject(arg0).maxColorAttachments;
    return ret;
}
export function __wbg_maxComputeInvocationsPerWorkgroup_2d964564c37f1c65(arg0) {
    const ret = getObject(arg0).maxComputeInvocationsPerWorkgroup;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeX_a3e3206570da184f(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeX;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeY_dffa4a62244b7563(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeY;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeZ_976ebcb760f6d07d(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeZ;
    return ret;
}
export function __wbg_maxComputeWorkgroupStorageSize_2e8dbece6e532e2a(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupStorageSize;
    return ret;
}
export function __wbg_maxComputeWorkgroupsPerDimension_bb7d36b4d20c80f4(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupsPerDimension;
    return ret;
}
export function __wbg_maxDynamicStorageBuffersPerPipelineLayout_1ca859cb96a414e0(arg0) {
    const ret = getObject(arg0).maxDynamicStorageBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxDynamicUniformBuffersPerPipelineLayout_e968f2c8cd8f4d46(arg0) {
    const ret = getObject(arg0).maxDynamicUniformBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxInterStageShaderVariables_138ac882c4d6a3d3(arg0) {
    const ret = getObject(arg0).maxInterStageShaderVariables;
    return ret;
}
export function __wbg_maxSampledTexturesPerShaderStage_bb3e6b2698321fa6(arg0) {
    const ret = getObject(arg0).maxSampledTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxSamplersPerShaderStage_98c00a1829fa414b(arg0) {
    const ret = getObject(arg0).maxSamplersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageBufferBindingSize_e500e31f479e669e(arg0) {
    const ret = getObject(arg0).maxStorageBufferBindingSize;
    return ret;
}
export function __wbg_maxStorageBuffersPerShaderStage_eb663f6d7521b6a7(arg0) {
    const ret = getObject(arg0).maxStorageBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageTexturesPerShaderStage_bb3ad93b53e618c0(arg0) {
    const ret = getObject(arg0).maxStorageTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxTextureArrayLayers_2a56d05fb261c99a(arg0) {
    const ret = getObject(arg0).maxTextureArrayLayers;
    return ret;
}
export function __wbg_maxTextureDimension1D_84590c1d4770d319(arg0) {
    const ret = getObject(arg0).maxTextureDimension1D;
    return ret;
}
export function __wbg_maxTextureDimension2D_7f2b5c8b2727e3fc(arg0) {
    const ret = getObject(arg0).maxTextureDimension2D;
    return ret;
}
export function __wbg_maxTextureDimension3D_7f3babddf55c32a6(arg0) {
    const ret = getObject(arg0).maxTextureDimension3D;
    return ret;
}
export function __wbg_maxUniformBufferBindingSize_d80a09e23c0b284c(arg0) {
    const ret = getObject(arg0).maxUniformBufferBindingSize;
    return ret;
}
export function __wbg_maxUniformBuffersPerShaderStage_0b8b2de676fa740e(arg0) {
    const ret = getObject(arg0).maxUniformBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxVertexAttributes_a693dd921316649b(arg0) {
    const ret = getObject(arg0).maxVertexAttributes;
    return ret;
}
export function __wbg_maxVertexBufferArrayStride_f256d91f281076cb(arg0) {
    const ret = getObject(arg0).maxVertexBufferArrayStride;
    return ret;
}
export function __wbg_maxVertexBuffers_70ab564b25d5ac20(arg0) {
    const ret = getObject(arg0).maxVertexBuffers;
    return ret;
}
export function __wbg_media_40cbd26ab34df71f(arg0, arg1) {
    const ret = getObject(arg1).media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_metaKey_d961c7572a9f84f5(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_metaKey_f934f09e37889d70(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_minStorageBufferOffsetAlignment_3248ed00dcdbf79f(arg0) {
    const ret = getObject(arg0).minStorageBufferOffsetAlignment;
    return ret;
}
export function __wbg_minUniformBufferOffsetAlignment_3b9fa4caae03e903(arg0) {
    const ret = getObject(arg0).minUniformBufferOffsetAlignment;
    return ret;
}
export function __wbg_movementX_87e39021f3fce8b8(arg0) {
    const ret = getObject(arg0).movementX;
    return ret;
}
export function __wbg_movementY_f6f63087e2248fa9(arg0) {
    const ret = getObject(arg0).movementY;
    return ret;
}
export function __wbg_navigator_51379c10a84aeec9(arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}
export function __wbg_navigator_99621db14b3f1099(arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}
export function __wbg_new_227d7c05414eb861() {
    const ret = new Error();
    return addHeapObject(ret);
}
export function __wbg_new_25e75d1f0df4d87a() { return handleError(function (arg0, arg1) {
    const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_32b398fb48b6d94a() {
    const ret = new Array();
    return addHeapObject(ret);
}
export function __wbg_new_4339b2a2675a03e3() { return handleError(function () {
    const ret = new AbortController();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_5394f65338077341() { return handleError(function (arg0) {
    const ret = new ResizeObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_8f0c2d11e48a4727() { return handleError(function (arg0, arg1) {
    const ret = new Worker(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_da52cf8fe3429cb2() {
    const ret = new Object();
    return addHeapObject(ret);
}
export function __wbg_new_e0bd7540d9834af6() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_f1a34223ddbe3f7d() { return handleError(function () {
    const ret = new MessageChannel();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_typed_4148bd5ae72ab3f0() {
    const ret = new Object();
    return addHeapObject(ret);
}
export function __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0() { return handleError(function (arg0, arg1) {
    const ret = new Blob(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_now_e7c6795a7f81e10f(arg0) {
    const ret = getObject(arg0).now();
    return ret;
}
export function __wbg_observe_615bef91ee28c925(arg0, arg1, arg2) {
    getObject(arg0).observe(getObject(arg1), getObject(arg2));
}
export function __wbg_observe_c3834a3e4cde3e64(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_observe_f27242eadc2ebd47(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_of_5f1b88183ddb5d94(arg0, arg1) {
    const ret = Array.of(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_of_85f52f8b6491a7ca(arg0) {
    const ret = Array.of(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_offsetX_a9bf2ea7f0575ac9(arg0) {
    const ret = getObject(arg0).offsetX;
    return ret;
}
export function __wbg_offsetY_10e5433a1bbd4c01(arg0) {
    const ret = getObject(arg0).offsetY;
    return ret;
}
export function __wbg_onSubmittedWorkDone_270d6b5a45520e79(arg0) {
    const ret = getObject(arg0).onSubmittedWorkDone();
    return addHeapObject(ret);
}
export function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
}
export function __wbg_persisted_e508d4d322115185(arg0) {
    const ret = getObject(arg0).persisted;
    return ret;
}
export function __wbg_pixelStorei_2a93b18efde9acf8(arg0, arg1, arg2) {
    getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
}
export function __wbg_pixelStorei_c844cd0db4f1fde6(arg0, arg1, arg2) {
    getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
}
export function __wbg_play_3997a1be51d27925(arg0) {
    getObject(arg0).play();
}
export function __wbg_pointerId_ea33d2695be12e7f(arg0) {
    const ret = getObject(arg0).pointerId;
    return ret;
}
export function __wbg_pointerType_d5e932608aa61bb6(arg0, arg1) {
    const ret = getObject(arg1).pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_polygonOffset_4eb460adf41db6cd(arg0, arg1, arg2) {
    getObject(arg0).polygonOffset(arg1, arg2);
}
export function __wbg_polygonOffset_eccb68e40a18f861(arg0, arg1, arg2) {
    getObject(arg0).polygonOffset(arg1, arg2);
}
export function __wbg_port1_dabba0a56576e47e(arg0) {
    const ret = getObject(arg0).port1;
    return addHeapObject(ret);
}
export function __wbg_port2_d05676aee003eedc(arg0) {
    const ret = getObject(arg0).port2;
    return addHeapObject(ret);
}
export function __wbg_postMessage_b80f20949a4b4f55() { return handleError(function (arg0, arg1) {
    getObject(arg0).postMessage(getObject(arg1));
}, arguments); }
export function __wbg_postMessage_ef2dbf5e8c8ebffc() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
}, arguments); }
export function __wbg_postTask_e2439afddcdfbb55(arg0, arg1, arg2) {
    const ret = getObject(arg0).postTask(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_pressure_9a7845d9744ae9f4(arg0) {
    const ret = getObject(arg0).pressure;
    return ret;
}
export function __wbg_preventDefault_b64888c857500682(arg0) {
    getObject(arg0).preventDefault();
}
export function __wbg_prototype_0d5bb2023db3bcfc() {
    const ret = ResizeObserverEntry.prototype;
    return addHeapObject(ret);
}
export function __wbg_prototypesetcall_4770620bbe4688a0(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
}
export function __wbg_push_d2ae3af0c1217ae6(arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    return ret;
}
export function __wbg_queryCounterEXT_b74a4567ddfeecf0(arg0, arg1, arg2) {
    getObject(arg0).queryCounterEXT(getObject(arg1), arg2 >>> 0);
}
export function __wbg_querySelectorAll_7e98cbe256deaadd() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelectorAll(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_querySelector_fd7d157ebe17cd16() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_queueMicrotask_0ab5b2d2393e99b9(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
}
export function __wbg_queueMicrotask_6a09b7bc46549209(arg0) {
    queueMicrotask(getObject(arg0));
}
export function __wbg_queueMicrotask_ed5b33385a53c3a9(arg0, arg1) {
    getObject(arg0).queueMicrotask(getObject(arg1));
}
export function __wbg_queue_adce34608fd0c893(arg0) {
    const ret = getObject(arg0).queue;
    return addHeapObject(ret);
}
export function __wbg_readBuffer_4271437a70aae481(arg0, arg1) {
    getObject(arg0).readBuffer(arg1 >>> 0);
}
export function __wbg_readPixels_5f013a7d85b23800() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
}, arguments); }
export function __wbg_readPixels_82c9dee754d58176() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
}, arguments); }
export function __wbg_readPixels_c7861e25836bf57b() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
}, arguments); }
export function __wbg_removeEventListener_a3f23c70077bdcc1() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_removeListener_768e1e787e1d4b2e() { return handleError(function (arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
}, arguments); }
export function __wbg_removeProperty_70da952bc1b493fa() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_renderbufferStorage_0a8de92542893819(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
}
export function __wbg_renderbufferStorage_ab5f745ff8efce3d(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
}
export function __wbg_repeat_4e131e99bff9b9f4(arg0) {
    const ret = getObject(arg0).repeat;
    return ret;
}
export function __wbg_requestAdapter_2e6718811c735a57(arg0, arg1) {
    const ret = getObject(arg0).requestAdapter(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_requestAnimationFrame_1a85deeab66448c2() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_requestDevice_ab46d0519ea1cc34(arg0, arg1) {
    const ret = getObject(arg0).requestDevice(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_requestFullscreen_3f16e43f398ce624(arg0) {
    const ret = getObject(arg0).requestFullscreen();
    return addHeapObject(ret);
}
export function __wbg_requestFullscreen_b977a3a0697e883c(arg0) {
    const ret = getObject(arg0).requestFullscreen;
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_3689e3e38f6cfc02(arg0) {
    const ret = getObject(arg0).requestIdleCallback;
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_d292749bf33501af() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestIdleCallback(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_resolve_2191a4dfe481c25b(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_revokeObjectURL_e010fb0b45f93f3f() { return handleError(function (arg0, arg1) {
    URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_samplerParameterf_0b3308eeb1faa3a1(arg0, arg1, arg2, arg3) {
    getObject(arg0).samplerParameterf(getObject(arg1), arg2 >>> 0, arg3);
}
export function __wbg_samplerParameteri_7b1b4091de49aabb(arg0, arg1, arg2, arg3) {
    getObject(arg0).samplerParameteri(getObject(arg1), arg2 >>> 0, arg3);
}
export function __wbg_scheduler_a17d41c9c822fc26(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_scheduler_b35fe73ba70e89cc(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_scissor_105e756596bc35df(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
}
export function __wbg_scissor_573b844152316b8d(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
}
export function __wbg_setAttribute_71039043be82d098() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setPipeline_c41bf46790f27f9e(arg0, arg1) {
    getObject(arg0).setPipeline(getObject(arg1));
}
export function __wbg_setPointerCapture_70025ca3fb7f26b9() { return handleError(function (arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
}, arguments); }
export function __wbg_setProperty_e4e51b1b1d681d15() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setTimeout_5ccd86968701f1ec() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).setTimeout(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_setTimeout_cfa2cf195c3738db() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
}, arguments); }
export function __wbg_setVertexBuffer_1e448859663dd400(arg0, arg1, arg2, arg3) {
    getObject(arg0).setVertexBuffer(arg1 >>> 0, getObject(arg2), arg3);
}
export function __wbg_setVertexBuffer_7cf533d694e747f3(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setVertexBuffer(arg1 >>> 0, getObject(arg2), arg3, arg4);
}
export function __wbg_set_61e45ae8061eca11(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
export function __wbg_set_8535240470bf2500() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments); }
export function __wbg_set_a_88262a42340d0b1c(arg0, arg1) {
    getObject(arg0).a = arg1;
}
export function __wbg_set_alpha_bfd2df62e7bc581b(arg0, arg1) {
    getObject(arg0).alpha = getObject(arg1);
}
export function __wbg_set_alpha_mode_df805952892caa9c(arg0, arg1) {
    getObject(arg0).alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
}
export function __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2(arg0, arg1) {
    getObject(arg0).alphaToCoverageEnabled = arg1 !== 0;
}
export function __wbg_set_array_layer_count_7312f0f31af94e7c(arg0, arg1) {
    getObject(arg0).arrayLayerCount = arg1 >>> 0;
}
export function __wbg_set_array_stride_f64_27ffaf4fffd74e61(arg0, arg1) {
    getObject(arg0).arrayStride = arg1;
}
export function __wbg_set_aspect_0d453bca3d012f02(arg0, arg1) {
    getObject(arg0).aspect = __wbindgen_enum_GpuTextureAspect[arg1];
}
export function __wbg_set_attributes_7537844a7e6dafdc(arg0, arg1, arg2) {
    getObject(arg0).attributes = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_b_c47befe0af3261eb(arg0, arg1) {
    getObject(arg0).b = arg1;
}
export function __wbg_set_base_array_layer_f176bb9f1b37b342(arg0, arg1) {
    getObject(arg0).baseArrayLayer = arg1 >>> 0;
}
export function __wbg_set_base_mip_level_1df145d9f8db32a9(arg0, arg1) {
    getObject(arg0).baseMipLevel = arg1 >>> 0;
}
export function __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd(arg0, arg1) {
    getObject(arg0).beginningOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_bind_group_layouts_5a9cfea401c020ab(arg0, arg1, arg2) {
    getObject(arg0).bindGroupLayouts = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_blend_7493c2066c3e9970(arg0, arg1) {
    getObject(arg0).blend = getObject(arg1);
}
export function __wbg_set_box_223b9bc0b7f548f6(arg0, arg1) {
    getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
}
export function __wbg_set_buffers_7d0d8f507699e956(arg0, arg1, arg2) {
    getObject(arg0).buffers = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_clear_value_gpu_color_dict_6211425789c76e59(arg0, arg1) {
    getObject(arg0).clearValue = getObject(arg1);
}
export function __wbg_set_code_b4f37f81f45b5b25(arg0, arg1, arg2) {
    getObject(arg0).code = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_color_83aa977526e88cbb(arg0, arg1) {
    getObject(arg0).color = getObject(arg1);
}
export function __wbg_set_color_attachments_581fdb3310e4abfa(arg0, arg1, arg2) {
    getObject(arg0).colorAttachments = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_compare_f36b34abfaa08ccb(arg0, arg1) {
    getObject(arg0).compare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_count_069a4eac409bac55(arg0, arg1) {
    getObject(arg0).count = arg1 >>> 0;
}
export function __wbg_set_cull_mode_fc649853947a3d0c(arg0, arg1) {
    getObject(arg0).cullMode = __wbindgen_enum_GpuCullMode[arg1];
}
export function __wbg_set_depth_bias_clamp_1c0d695df7f092e5(arg0, arg1) {
    getObject(arg0).depthBiasClamp = arg1;
}
export function __wbg_set_depth_bias_d7cd16096242a657(arg0, arg1) {
    getObject(arg0).depthBias = arg1;
}
export function __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba(arg0, arg1) {
    getObject(arg0).depthBiasSlopeScale = arg1;
}
export function __wbg_set_depth_clear_value_beda3ec5b1a5c43a(arg0, arg1) {
    getObject(arg0).depthClearValue = arg1;
}
export function __wbg_set_depth_compare_0c8631eb2eae98e3(arg0, arg1) {
    getObject(arg0).depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_depth_fail_op_668155ae33d3c06f(arg0, arg1) {
    getObject(arg0).depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_depth_load_op_511c513eab4e56a9(arg0, arg1) {
    getObject(arg0).depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_depth_read_only_7f41a74741c144ec(arg0, arg1) {
    getObject(arg0).depthReadOnly = arg1 !== 0;
}
export function __wbg_set_depth_stencil_97506c7bea4f53da(arg0, arg1) {
    getObject(arg0).depthStencil = getObject(arg1);
}
export function __wbg_set_depth_stencil_attachment_73b79e8b4e948222(arg0, arg1) {
    getObject(arg0).depthStencilAttachment = getObject(arg1);
}
export function __wbg_set_depth_store_op_c89f33b39b43361c(arg0, arg1) {
    getObject(arg0).depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_depth_write_enabled_ce89750042940350(arg0, arg1) {
    getObject(arg0).depthWriteEnabled = arg1 !== 0;
}
export function __wbg_set_device_e275d1d4f3c9eb74(arg0, arg1) {
    getObject(arg0).device = getObject(arg1);
}
export function __wbg_set_dimension_e325282e613ca0a4(arg0, arg1) {
    getObject(arg0).dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_dst_factor_ec7407f19be1aff9(arg0, arg1) {
    getObject(arg0).dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_end_of_pass_write_index_0d546e46b86ea069(arg0, arg1) {
    getObject(arg0).endOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_entry_point_207540f042015ce5(arg0, arg1, arg2) {
    getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_entry_point_e87e79251dd3144f(arg0, arg1, arg2) {
    getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_fail_op_92f716dbc88b6973(arg0, arg1) {
    getObject(arg0).failOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_format_1fcaa7d60546b490(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_5d2f25cc93654ecc(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuVertexFormat[arg1];
}
export function __wbg_set_format_5ff53724ed6cedf2(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_815efd4dc4817bbb(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_e52bdcca880d2c8e(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_fragment_8b780f00a0b0e6f3(arg0, arg1) {
    getObject(arg0).fragment = getObject(arg1);
}
export function __wbg_set_front_face_28ffdf524eedce5b(arg0, arg1) {
    getObject(arg0).frontFace = __wbindgen_enum_GpuFrontFace[arg1];
}
export function __wbg_set_g_5983abfc46e0cf4e(arg0, arg1) {
    getObject(arg0).g = arg1;
}
export function __wbg_set_height_7d9d8f892e6964c6(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}
export function __wbg_set_height_bbeef8f354041577(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}
export function __wbg_set_label_08d9be3e4719c226(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_17eb9fe3a02f62b0(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_60ad96c811e0d109(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_72bb4f41ef0cb893(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_9556af8b5cda3c9d(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_d010f237b26f2c55(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_e16e2dbe51349c7f(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_e3944e54881b8c50(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_e922700240417ab5(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_layout_50ab727f44b38f26(arg0, arg1) {
    getObject(arg0).layout = getObject(arg1);
}
export function __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882(arg0, arg1) {
    getObject(arg0).layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
}
export function __wbg_set_load_op_99661da6c4eab9b0(arg0, arg1) {
    getObject(arg0).loadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_mapped_at_creation_81b586dc90a50347(arg0, arg1) {
    getObject(arg0).mappedAtCreation = arg1 !== 0;
}
export function __wbg_set_mask_70a8a59ce09e5997(arg0, arg1) {
    getObject(arg0).mask = arg1 >>> 0;
}
export function __wbg_set_mip_level_count_534caaa7e68e68b8(arg0, arg1) {
    getObject(arg0).mipLevelCount = arg1 >>> 0;
}
export function __wbg_set_mode_9990b3393ba469ae(arg0, arg1) {
    getObject(arg0).mode = __wbindgen_enum_GpuCanvasToneMappingMode[arg1];
}
export function __wbg_set_module_d0e2098713606cae(arg0, arg1) {
    getObject(arg0).module = getObject(arg1);
}
export function __wbg_set_module_f02e076ca7e7daf8(arg0, arg1) {
    getObject(arg0).module = getObject(arg1);
}
export function __wbg_set_multisample_37ddafe88b5cd466(arg0, arg1) {
    getObject(arg0).multisample = getObject(arg1);
}
export function __wbg_set_offset_f64_28c24dc15000932e(arg0, arg1) {
    getObject(arg0).offset = arg1;
}
export function __wbg_set_onmessage_d511b70365304094(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
}
export function __wbg_set_operation_62ce44e1728c4047(arg0, arg1) {
    getObject(arg0).operation = __wbindgen_enum_GpuBlendOperation[arg1];
}
export function __wbg_set_pass_op_cf02fa088d6352a7(arg0, arg1) {
    getObject(arg0).passOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_power_preference_8fdca0b7af640d49(arg0, arg1) {
    getObject(arg0).powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
}
export function __wbg_set_primitive_43c23761a55b4088(arg0, arg1) {
    getObject(arg0).primitive = getObject(arg1);
}
export function __wbg_set_query_set_41de86d2401aee04(arg0, arg1) {
    getObject(arg0).querySet = getObject(arg1);
}
export function __wbg_set_r_c6f4c68f4804d655(arg0, arg1) {
    getObject(arg0).r = arg1;
}
export function __wbg_set_required_features_1baf274a8669db60(arg0, arg1, arg2) {
    getObject(arg0).requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_required_limits_871ed33c68613dcb(arg0, arg1) {
    getObject(arg0).requiredLimits = getObject(arg1);
}
export function __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96(arg0, arg1) {
    getObject(arg0).resolveTarget = getObject(arg1);
}
export function __wbg_set_shader_location_7e1832a74f912217(arg0, arg1) {
    getObject(arg0).shaderLocation = arg1 >>> 0;
}
export function __wbg_set_size_f64_6bcd40704bf4cfdc(arg0, arg1) {
    getObject(arg0).size = arg1;
}
export function __wbg_set_src_factor_9bfe84af9b7b5cac(arg0, arg1) {
    getObject(arg0).srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_stencil_back_85b22f1db5b1940a(arg0, arg1) {
    getObject(arg0).stencilBack = getObject(arg1);
}
export function __wbg_set_stencil_clear_value_42be608809151e2a(arg0, arg1) {
    getObject(arg0).stencilClearValue = arg1 >>> 0;
}
export function __wbg_set_stencil_front_525526164a798a44(arg0, arg1) {
    getObject(arg0).stencilFront = getObject(arg1);
}
export function __wbg_set_stencil_load_op_31838c036993098a(arg0, arg1) {
    getObject(arg0).stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_stencil_read_mask_5cc26495e8b3ae82(arg0, arg1) {
    getObject(arg0).stencilReadMask = arg1 >>> 0;
}
export function __wbg_set_stencil_read_only_bf1d0c1897e25c62(arg0, arg1) {
    getObject(arg0).stencilReadOnly = arg1 !== 0;
}
export function __wbg_set_stencil_store_op_e6be1cbc3a8fc210(arg0, arg1) {
    getObject(arg0).stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b(arg0, arg1) {
    getObject(arg0).stencilWriteMask = arg1 >>> 0;
}
export function __wbg_set_step_mode_a97bb24714da41a9(arg0, arg1) {
    getObject(arg0).stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
}
export function __wbg_set_store_op_b5fdf672436f13f3(arg0, arg1) {
    getObject(arg0).storeOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_strip_index_format_9f787be6c5fc9e87(arg0, arg1) {
    getObject(arg0).stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
}
export function __wbg_set_targets_c38bd200c836d66f(arg0, arg1, arg2) {
    getObject(arg0).targets = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_timestamp_writes_98bed1a8bbc6682d(arg0, arg1) {
    getObject(arg0).timestampWrites = getObject(arg1);
}
export function __wbg_set_tone_mapping_b3464f1baa4cff92(arg0, arg1) {
    getObject(arg0).toneMapping = getObject(arg1);
}
export function __wbg_set_topology_da25f2cc5af203d2(arg0, arg1) {
    getObject(arg0).topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
}
export function __wbg_set_type_8ce203e412e28cf6(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_unclipped_depth_04524a2b44e1e3c1(arg0, arg1) {
    getObject(arg0).unclippedDepth = arg1 !== 0;
}
export function __wbg_set_usage_a137f82ca163b0a9(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_usage_b2a2935f37bf3d08(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_usage_ddd42599bbba7779(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_vertex_0be5d146f9ff6f36(arg0, arg1) {
    getObject(arg0).vertex = getObject(arg1);
}
export function __wbg_set_view_formats_5797d2fff3c11808(arg0, arg1, arg2) {
    getObject(arg0).viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9(arg0, arg1) {
    getObject(arg0).view = getObject(arg1);
}
export function __wbg_set_view_gpu_texture_view_c0f35f8857c25206(arg0, arg1) {
    getObject(arg0).view = getObject(arg1);
}
export function __wbg_set_width_49ac9b7d914afc85(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}
export function __wbg_set_width_8e30d010cd66830d(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}
export function __wbg_set_write_mask_d45279e56abbfcb5(arg0, arg1) {
    getObject(arg0).writeMask = arg1 >>> 0;
}
export function __wbg_shaderSource_4cf90af97621ff49(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
}
export function __wbg_shaderSource_c3469dc2221dd528(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
}
export function __wbg_shiftKey_9bcb8bdd60c2f152(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_shiftKey_9f797da486b2ade8(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_signal_dad7cb35193abd31(arg0) {
    const ret = getObject(arg0).signal;
    return addHeapObject(ret);
}
export function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_start_d0cdf16ff965b3f3(arg0) {
    getObject(arg0).start();
}
export function __wbg_static_accessor_GLOBAL_4ef717fb391d88b7() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_SELF_146583524fe1469b() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_WINDOW_f2829a2234d7819e() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_stencilFuncSeparate_35136c4e5153406f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
}
export function __wbg_stencilFuncSeparate_814300446c2969ef(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
}
export function __wbg_stencilMaskSeparate_49367b0b5883a8bd(arg0, arg1, arg2) {
    getObject(arg0).stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_stencilMaskSeparate_63976cc45fb94d84(arg0, arg1, arg2) {
    getObject(arg0).stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_stencilMask_1c99b79b516d12dd(arg0, arg1) {
    getObject(arg0).stencilMask(arg1 >>> 0);
}
export function __wbg_stencilMask_9a844dc58a89992f(arg0, arg1) {
    getObject(arg0).stencilMask(arg1 >>> 0);
}
export function __wbg_stencilOpSeparate_b2cb9af05b803e02(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_stencilOpSeparate_c77fcb47561d0aee(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_style_6657aed849e5d757(arg0) {
    const ret = getObject(arg0).style;
    return addHeapObject(ret);
}
export function __wbg_submit_ce44115121cd166c(arg0, arg1, arg2) {
    getObject(arg0).submit(getArrayJsValueViewFromWasm0(arg1, arg2));
}
export function __wbg_texImage2D_3813406af5bf54c8() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texImage2D_5abd8779d1d033c7() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texImage2D_8d168171984f2a40() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_texImage3D_bdd9bebe42ed1f52() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
}, arguments); }
export function __wbg_texImage3D_ef16a1f721b3f908() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, getObject(arg10));
}, arguments); }
export function __wbg_texParameteri_1fc451e0964fc91c(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
}
export function __wbg_texParameteri_9d0daa263d3a863f(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
}
export function __wbg_texStorage2D_7f947efc63dac273(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_texStorage3D_f8f2e4b3386736f9(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
}
export function __wbg_texSubImage2D_047380bb2660e4f9() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_texSubImage2D_5058af3d30a8e205() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_6a376bfc3a31436b() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_98c43894eb217aa7() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_bed5e7a3cd81d409() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_d1af697e69f8a9e4() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_d3cd09d0ffcb27be() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage2D_e107b4f88c19b920() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments); }
export function __wbg_texSubImage3D_45e498ae6298998c() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_texSubImage3D_4fdd4cd95a2925c2() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_texSubImage3D_6cb6cfd732dad145() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_texSubImage3D_8077e90ec309c414() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
}, arguments); }
export function __wbg_texSubImage3D_93b38c69acb735c8() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_texSubImage3D_c9e5a071796d412f() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_texSubImage3D_feebaf7f0f4594c6() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments); }
export function __wbg_then_16d107c451e9905d(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_then_6ec10ae38b3e92f7(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_unconfigure_0a07a0a40de8988d(arg0) {
    getObject(arg0).unconfigure();
}
export function __wbg_uniform1f_62692c8fa8e7bf1e(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
}
export function __wbg_uniform1f_b79d0c5667f9fb40(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
}
export function __wbg_uniform1i_5830de6702add20a(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
}
export function __wbg_uniform1i_7621f908f78177df(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
}
export function __wbg_uniform1ui_cd7ad5581093b3df(arg0, arg1, arg2) {
    getObject(arg0).uniform1ui(getObject(arg1), arg2 >>> 0);
}
export function __wbg_uniform2fv_1b43656b33177d21(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform2fv_948dab6a82b428ac(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform2iv_859048b9d60f46ae(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform2iv_f84a24961c0cfcd0(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform2uiv_8a9cb3155271213b(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2uiv(getObject(arg1), getArrayU32FromWasm0(arg2, arg3));
}
export function __wbg_uniform3fv_8ecb5ebb510b7bce(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform3fv_95d1933ea1440725(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform3iv_09abae5eabd6b9d6(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform3iv_a3a7008990fd84f0(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform3uiv_3c0b163732f5b8f0(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3uiv(getObject(arg1), getArrayU32FromWasm0(arg2, arg3));
}
export function __wbg_uniform4f_9ff60fc65b0ed726(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
}
export function __wbg_uniform4f_b25e39808b830021(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
}
export function __wbg_uniform4fv_4ca8c114ca3de099(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform4fv_674a247aeb15012d(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniform4iv_45ab52abcb3f882c(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform4iv_d02934d7b94df609(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
}
export function __wbg_uniform4uiv_0d1a8ed214f10c31(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4uiv(getObject(arg1), getArrayU32FromWasm0(arg2, arg3));
}
export function __wbg_uniformBlockBinding_a9ed6b750199e03c(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniformBlockBinding(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
}
export function __wbg_uniformMatrix2fv_769725d64641341f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix2fv_9284424cc6aac672(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2x3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix2x4fv_d801a561c3c18169(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2x4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix3fv_33e96c7d29dc1e22(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix3fv_568aa181379c8a75(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3x2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix3x4fv_8abccc5745b0dd90(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3x4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix4fv_25115a23e04f6db7(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix4fv_423b958042692150(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4x2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_uniformMatrix4x3fv_8640fa85b90ea910(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4x3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_unmap_adaf93276fdf9aaf(arg0) {
    getObject(arg0).unmap();
}
export function __wbg_unobserve_41a4f85162f1fb18(arg0, arg1) {
    getObject(arg0).unobserve(getObject(arg1));
}
export function __wbg_useProgram_182d120fe476921b(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
}
export function __wbg_useProgram_49495850b446fa56(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
}
export function __wbg_userAgentData_31b8f893e8977e94(arg0) {
    const ret = getObject(arg0).userAgentData;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_userAgent_0558f0ac642f7771() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg1).userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_vertexAttribDivisorANGLE_978337b09d11ed84(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_vertexAttribDivisor_fb31b5ed9bc856da(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_vertexAttribIPointer_de08a8d8b625e253(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_vertexAttribPointer_a8f0af57269c2067(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}
export function __wbg_vertexAttribPointer_b300c8e000cdac93(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}
export function __wbg_viewport_affdf15c559df1e2(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
}
export function __wbg_viewport_e8a16ca4a5085e5f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
}
export function __wbg_visibilityState_301d0905e8103e21(arg0) {
    const ret = getObject(arg0).visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
}
export function __wbg_warn_b1370d804fa3e259(arg0) {
    console.warn(getObject(arg0));
}
export function __wbg_webkitFullscreenElement_4055d847f8ff064e(arg0) {
    const ret = getObject(arg0).webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_webkitRequestFullscreen_c4ec4df7be373ffd(arg0) {
    getObject(arg0).webkitRequestFullscreen();
}
export function __wbg_width_20c45c895834b83f(arg0) {
    const ret = getObject(arg0).width;
    return ret;
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 3124, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_9701);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 2935, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6959);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_3);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_4);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_5);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 761, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_2362);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_7);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_8);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_9);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000b(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 2932, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6958_10);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000c(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 761, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_2362_11);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000d(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 761, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_2362_12);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000e(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 2943, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_6957);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000f(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000010(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
    const ret = getArrayF32FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000011(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
    const ret = getArrayI16FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000012(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
    const ret = getArrayI32FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000013(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
    const ret = getArrayI8FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000014(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
    const ret = getArrayU16FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000015(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
    const ret = getArrayU32FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000016(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
    const ret = getArrayU8FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000017(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
}
export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
}
function __wasm_bindgen_func_elem_6957(arg0, arg1) {
    wasm.__wasm_bindgen_func_elem_6957(arg0, arg1);
}

function __wasm_bindgen_func_elem_6958(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_3(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_3(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_4(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_4(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_5(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_5(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_7(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_7(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_8(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_8(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_9(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_9(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_6958_10(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_6958_10(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_9701(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_9701(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wasm_bindgen_func_elem_6959(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_6959(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

function __wasm_bindgen_func_elem_2362(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_2362(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wasm_bindgen_func_elem_2362_11(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_2362_11(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wasm_bindgen_func_elem_2362_12(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_2362_12(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}


const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


const __wbindgen_enum_GpuCanvasToneMappingMode = ["standard", "extended"];


const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_export5(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayJsValueViewFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(getObject(mem.getUint32(i, true)));
    }
    return result;
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_export5(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
