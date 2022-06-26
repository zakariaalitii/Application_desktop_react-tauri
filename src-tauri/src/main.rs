#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::mem;
#[tauri::command]
fn analyze_slice() {
  println!("first element of the slice: ");
  println!("the slice has  elements");
}


fn main() {
  tauri::Builder::default()
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![analyze_slice])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
