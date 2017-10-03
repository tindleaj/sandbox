import luxe.GameConfig;
import luxe.Input;
import luxe.Sprite;
import luxe.Color;
import luxe.Vector;

class Main extends luxe.Game {

	var block : Sprite;

	override function config(config:GameConfig) {

		config.window.title = 'haxe/luxe test game';
		config.window.width = 960;
		config.window.height = 640;
		config.window.fullscreen = false;

		return config;

	} // config

	override function ready() {

		block = new Sprite({
			name: 'block sprite',
			pos: Luxe.screen.mid,
			color: new Color().rgb(0xf94b04),
			size: new Vector(128, 128)
		});
		
	} // ready

	override function onmousemove(event:MouseEvent) {
		block.pos = event.pos;

		// can also use:
		// block.pos.x
		// block.pos.y
	}

	override function onkeyup(event:KeyEvent) {
		if (event.keycode == Key.escape) {
			Luxe.shutdown();
		}
	}

	override function update(delta:Float) {
		block.rotation_z += 40 * delta;
	}
	
}