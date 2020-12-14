extern crate js_sys;
extern crate web_sys;

use wasm_bindgen::prelude::*;

mod utils;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(message: &str);
}

#[wasm_bindgen]
pub fn parse(message: &str) -> String {
    r#"
    #H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
    "#.into()
}
