import luxe.GameConfig;
import luxe.Input;
import luxe.Sprite;
import luxe.Color;
import luxe.Vector;
import phoenix.Texture;

class Main extends luxe.Game {

	var player : Sprite;
	var move_speed : Float = 0;

	override function config(config:GameConfig) {

		config.window.title = 'haxe/luxe test game';
		config.window.width = 960;
		config.window.height = 640;
		config.window.fullscreen = false;

		config.preload.textures.push({ id: 'assets/stand.png' });

		return config;

	} // config

	override function ready() {

		var image = Luxe.resources.texture('assets/stand.png');

		image.filter_min = image.filter_mag = FilterType.nearest;

		var ratio = 1.75;
		var height = Luxe.screen.h/ratio;
		var width = (height/image.height) * image.width;

		player = new Sprite({
			name: 'player',
			texture: image,
			pos: new Vector(Luxe.screen.mid.x, Luxe.screen.h - (height/ratio)),
			size: new Vector(width, height)
		});

		move_speed = width * 2;

		connect_input();

		// block = new Sprite({
		// 	name: 'block sprite',
		// 	pos: Luxe.screen.mid,
		// 	color: new Color().rgb(0xf94b04),
		// 	size: new Vector(128, 128)
		// });
		
	} // ready

	function connect_input() {

		Luxe.input.bind_key('left', Key.left);
		Luxe.input.bind_key('left', Key.key_a);

		Luxe.input.bind_key('right', Key.right);
		Luxe.input.bind_key('right', Key.key_d);

	} // connect_input

	// override function onmousemove(event:MouseEvent) {
	// 	block.pos = event.pos;

	// 	// can also use:
	// 	// block.pos.x
	// 	// block.pos.y
	// }

	override function onkeyup(event:KeyEvent) {
		if (event.keycode == Key.escape) {
			Luxe.shutdown();
		}
	}

	override function update(delta:Float) {

		if (Luxe.input.inputdown('left')) {

			player.pos.x -= move_speed * delta;
			player.flipx = false;

		} else if (Luxe.input.inputdown('right')) {

			player.pos.x += move_speed * delta;
			player.flipx = true;

		}

	} // update
	
}