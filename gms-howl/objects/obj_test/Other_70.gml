if (async_load[? "type"] == "WebAudio")
{
    var ev = async_load[? "event"];

    if (ev == "success")
    {
		/*
		Типы событий:
		
			"Sound loaded: " + name
			звук успешно загружен
			
			"Sound ended: " + name
			Звук закончил проигрывание
			
			"Failed to load: " + name
			ошибка загрузки звука
		*/
        show_debug_message(async_load[? "value"]);
    }
}