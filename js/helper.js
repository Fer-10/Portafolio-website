var skills = '<div class="col-md-3 skills-imgs"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skills_array = ['skill_1','skill_2','skill_3','skill_4','skill_5','skill_6','skill_7','skill_8'];

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1){
	skills_new = skills.replace('%data%', skills_array[i]);
	$('.skills-section-images').append(skills_new);
}

var experience = '<li><h4>%data% &nbsp; &nbsp; (%data1% )</h4><br><h5>%data2%</h5></li><hr>';

var experience_array = [
	{
		name: 'Compañia',
		years: '20XX-20XX',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	},
	{
		name: 'Compañia',
		years: '20XX-20XX',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	},
	{
		name: 'Compañia',
		years: '20XX-20XX',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	}	
];

var experience_new = '';

for(var i = 0; i < experience_array.length; i+=1){
	experience_new = experience.replace('%data%', experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%', experience_array[i]['years']);
	experience_new = experience_new.replace('%data2%', experience_array[i]['info']);
	$('.experience-section-info').append(experience_new);
}

var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img src="./img/%data1%.png" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Lenguaje(s): %data2%</h3><h5>%data3%</h5></div></div></li><br><hr>';

var projects_array = [
	{
		name: 'proyecto',
		img: 'img_test',
		language: 'C/C++',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	},
	{
		name: 'proyecto',
		img: 'img_test',
		language: 'Java',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	},
	{
		name: 'proyecto',
		img: 'img_test',
		language: 'C#',
		info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
	}
];

var projects_new = '';

for(var i=0; i < projects_array.length; i +=1)
{
	projects_new = projects.replace('%data%', projects_array[i]['name']);
	projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
	projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
	projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
	$('.projects-section-info').append(projects_new);
}