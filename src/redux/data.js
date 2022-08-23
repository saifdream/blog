const blogData = [
	{
		"id": 1,
		"type": "Computer-Science",
		"author": "Quique Carmona",
		"author_img": "2.jpg",
		"title": "sit amet, consectetuer adipiscing elit.",
		"feature_img": "1.jpg",
		"date": "28 Dec, 2021"
	},
	{
		"id": 2,
		"type": "Science",
		"author": "Quique Carmona",
		"author_img": "2.jpg",
		"title": "quam. Pellentesque habitant morbi tristique",
		"feature_img": "2.jpg",
		"date": "19 Dec, 2021"
	},
	{
		"id": 3,
		"type": "React",
		"author": "Patrick Lee",
		"author_img": "4.jpg",
		"title": "non sapien molestie orci tincidunt",
		"feature_img": "3.jpg",
		"date": "13 Jul, 2023"
	},
	{
		"id": 4,
		"type": "Nextjs",
		"author": "Patrick Lee",
		"author_img": "4.jpg",
		"title": "sed libero. Proin sed turpis",
		"feature_img": "4.jpg",
		"date": "6 Jul, 2022"
	},
	{
		"id": 5,
		"type": "Technology",
		"author": "Florencio Serrano",
		"author_img": "5.jpg",
		"title": "morbi tristique senectus et netus",
		"feature_img": "5.jpg",
		"date": "6 Apr, 2022"
	},
	{
		"id": 6,
		"type": "E-commerce",
		"author": "Miguel Herrero",
		"author_img": "6.jpg",
		"title": "suada augue ut lacus. Nulla",
		"feature_img": "6.jpg",
		"date": "22 Oct, 2021"
	},
	{
		"id": 7,
		"type": "AI",
		"author": "Eli Thomson",
		"author_img": "7.jpg",
		"title": "aliquam iaculis, lacus pede sagittis",
		"feature_img": "7.jpg",
		"date": "6 May, 2022"
	},
	{
		"id": 8,
		"type": "Technology",
		"author": "Abraham Blanco",
		"author_img": "9.jpg",
		"title": "adipiscing ligula. Aenean gravida nunc",
		"feature_img": "8.jpg",
		"date": "19 Oct, 2022"
	},
	{
		"id": 9,
		"type": "Science",
		"author": "Abraham Blanco",
		"author_img": "9.jpg",
		"title": "a, auctor non, feugiat nec,",
		"feature_img": "9.jpg",
		"date": "13 Aug, 2023"
	},
	{
		"id": 10,
		"type": "React",
		"author": "Vishnu Soni",
		"author_img": "10.jpg",
		"title": "arcu vel quam dignissim pharetra.",
		"feature_img": "10.jpg",
		"date": "4 Sep, 2021"
	},
	{
		"id": 11,
		"type": "Computer-Science",
		"author": "Rolf Müller",
		"author_img": "12.jpg",
		"title": "a, arcu. Sed et libero.",
		"feature_img": "11.jpg",
		"date": "28 Dec, 2022"
	},
	{
		"id": 12,
		"type": "Science",
		"author": "Rolf Müller",
		"author_img": "12.jpg",
		"title": "at augue id ante dictum",
		"feature_img": "12.jpg",
		"date": "22 Feb, 2023"
	},
	{
		"id": 13,
		"type": "React",
		"author": "Viktor Möller",
		"author_img": "14.jpg",
		"title": "odio tristique pharetra. Quisque ac",
		"feature_img": "13.jpg",
		"date": "31 Mar, 2023"
	},
	{
		"id": 14,
		"type": "Science",
		"author": "Viktor Möller",
		"author_img": "14.jpg",
		"title": "sed leo. Cras vehicula aliquet",
		"feature_img": "14.jpg",
		"date": "15 Apr, 2023"
	},
	{
		"id": 15,
		"type": "Article",
		"author": "Rowan Bailey",
		"author_img": "15.jpg",
		"title": "arcu. Sed et libero. Proin",
		"feature_img": "15.jpg",
		"date": "24 Jun, 2022"
	},
	{
		"id": 16,
		"type": "Education",
		"author": "Chetan Veena",
		"author_img": "16.jpg",
		"title": "vulputate mauris sagittis placerat. Cras",
		"feature_img": "16.jpg",
		"date": "16 Jun, 2022"
	},
	{
		"id": 17,
		"type": "Education",
		"author": "Ezra King",
		"author_img": "18.jpg",
		"title": "amet, consectetuer adipiscing elit. Etiam",
		"feature_img": "17.jpg",
		"date": "21 Sep, 2021"
	},
	{
		"id": 18,
		"type": "E-commerce",
		"author": "Ezra King",
		"author_img": "18.jpg",
		"title": "accumsan convallis, ante lectus convallis",
		"feature_img": "18.jpg",
		"date": "20 Dec, 2021"
	},
	{
		"id": 19,
		"type": "Technology",
		"author": "Bernhard Schuster",
		"author_img": "19.jpg",
		"title": "fermentum vel, mauris. Integer sem",
		"feature_img": "19.jpg",
		"date": "9 May, 2023"
	},
	{
		"id": 20,
		"type": "Redux",
		"author": "Caleb Walsh",
		"author_img": "20.jpg",
		"title": "faucibus ut, nulla. Cras eu",
		"feature_img": "20.jpg",
		"date": "15 Jul, 2023"
	},
	{
		"id": 21,
		"type": "React",
		"author": "Siegfried Schröder",
		"author_img": "21.jpg",
		"title": "auctor. Mauris vel turpis. Aliquam",
		"feature_img": "21.jpg",
		"date": "24 Feb, 2022"
	},
	{
		"id": 22,
		"type": "Education",
		"author": "Prabhu Samuel",
		"author_img": "22.jpg",
		"title": "velit. Sed suada augue ut",
		"feature_img": "22.jpg",
		"date": "4 Jul, 2023"
	},
	{
		"id": 23,
		"type": "Technology",
		"author": "José Marti",
		"author_img": "23.jpg",
		"title": "ante. Maecenas mi felis, adipiscing",
		"feature_img": "23.jpg",
		"date": "10 Nov, 2021"
	},
	{
		"id": 24,
		"type": "Science",
		"author": "Gordon Scott",
		"author_img": "24.jpg",
		"title": "Vivamus euismod urna. Nullam lobortis",
		"feature_img": "24.jpg",
		"date": "12 Nov, 2021"
	},
	{
		"id": 25,
		"type": "E-commerce",
		"author": "Daniel Taylor",
		"author_img": "25.jpg",
		"title": "sem mollis dui, in sodales",
		"feature_img": "25.jpg",
		"date": "1 Feb, 2022"
	},
	{
		"id": 26,
		"type": "Education",
		"author": "Alexander Butler",
		"author_img": "26.jpg",
		"title": "ornare. In faucibus. Morbi vehicula.",
		"feature_img": "26.jpg",
		"date": "17 Jan, 2023"
	},
	{
		"id": 27,
		"type": "React",
		"author": "Niko Frick",
		"author_img": "27.jpg",
		"title": "montes, nascetur ridiculus mus. Aenean",
		"feature_img": "27.jpg",
		"date": "10 Apr, 2023"
	},
	{
		"id": 28,
		"type": "Education",
		"author": "Matthias Diener",
		"author_img": "28.jpg",
		"title": "Aenean gravida nunc sed pede.",
		"feature_img": "28.jpg",
		"date": "14 Jul, 2023"
	},
	{
		"id": 29,
		"type": "Computer-Science",
		"author": "Guido Weber",
		"author_img": "29.jpg",
		"title": "vel turpis. Aliquam adipiscing lobortis",
		"feature_img": "29.jpg",
		"date": "11 Aug, 2022"
	},
	{
		"id": 30,
		"type": "AI",
		"author": "Guido Weber",
		"author_img": "29.jpg",
		"title": "auctor. Mauris vel turpis. Aliquam",
		"feature_img": "30.jpg",
		"date": "24 Aug, 2021"
	}
];

export default blogData;