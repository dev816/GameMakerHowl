browser_audio_load("music", "html5game/s_main_snd.mp3")
/*
	id оно же name, идентификатор звука или музыки
	
	browser_audio_load(name,url,loop,volume)
	
	url можем указать как прямую ссылку так и локально на файл
	дополнительные парматеры это loop - зацикливание 
	и volume громкость при воспроизведении
	
	****
	browser_audio_stop_sound(name)   - остановит музыку или звук
	browser_audio_pause_sound(name)  - поставит на паузу музыку или звук
	browser_audio_play_sound(name)   - воспроизведет музыку или звук
	browser_audio_resume_sound(name) - снимет с паузы музыку или звук
	browser_audio_set_volume(name)   - установит громкость музыке или звуку
*/