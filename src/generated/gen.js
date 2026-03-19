/*
* Developer Information:
* This file was generated using Unity 2021.3.45f2.
* Do not modify this file manually.

* Instead of using generated code you can also load the 3D scene like this: <needle-engine src="/assets/your_glTF_name.glb"></needle-engine>
* (When you're working with Unity the glTF file name will always match your scene or prefab's name)
*/

globalThis["needle:dependencies:ready"] = import("./register_types.ts")

export const needle_exported_files = new Array();
globalThis["needle:codegen_files"] = needle_exported_files;
import "../../public/assets/next.glb?url";
needle_exported_files.push("/./assets/next.glb");
document.addEventListener("DOMContentLoaded", () =>
{
	const needleEngine = document.querySelector("needle-engine");
	if(needleEngine && needleEngine.getAttribute("src") === null)
	{
		needleEngine.setAttribute("hash", "1773909426032");
		needleEngine.setAttribute("src", JSON.stringify(needle_exported_files));
	}
});
