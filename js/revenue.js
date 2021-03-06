var data = {
	label: "2014 Tallinna eelarve tulud kokku",
	amount: 461334933,
	children: [    	
	        {
		label: "Riiklikud maksud",
		amount: 308273853,
		color: '#123',
		children: [    	
  	                {
  		        label: "Füüsilise isiku tulumaks",
  		        amount: 280373853,
  	                },
  	                {
  		        label: "Maamaks",
  		        amount: 27900000,
  	                },	
	        ]
	        },
	        {
		label: "Kohalikud maksud",
		amount: 9080000,
		color: '#234',
		children: [    	
  	                {
  		        label: "Reklaamimaks",
  		        amount: 2700000,
  	                },
  	                {
  		        label: "Teede ja tänavate sulgemise maks",
  		        amount: 700000,
  	                },
  	                {
  		        label: "Parkimistasu",
  		        amount: 5680000,
  	                },	
	        ]
	        },
	        {
		label: "Lõivud",
		amount: 581520,
		color: '#345',
	        },
	        {
		label: "Kaupade ja teenuste müük",
		amount: 55377390,
		color: '#456',
		children: [    	
  	                {
  		        label: "Tulud majandustegevusest",
  		        amount: 42883202,
  	                },
                        {
  	                label: "Üür ja rent",
  		        amount: 6791391,
                        },
  	                {
  		        label: "Õiguste müük",
  		        amount: 2648351,
  	                },
  	                {
  		        label: "Muude toodete ja teenuste müük",
  		        amount: 3054446,
  	                },
	        ]
	        },
	        {
		label: "Muud tulud",
		amount: 1105000,
		color: '#567',
		children: [    	
  	                {
  		        label: "Trahvid",
  		        amount: 835000,
  	                },
  	                {
  		        label: "Muud tulud",
  		        amount: 270000,
  	                },
	        ]
	        },
	        {
		label: "Finantstulu investeerimisest",
		amount: 150000,
		color: '#678',
	        },
	        {
		label: "Tulu vara müügist",
		amount: 1777000,
		color: '#789',
	        },
	        {
		label: "Tulud muult varalt",
		amount: 327150,
		color: '#145',
		children: [    	
  	                {
  		        label: "Loodusvarade kasutusõigus",
  		        amount: 260000,
  	                },
  	                {
  		        label: "Võlalt arvestatud intressikulu",
  		        amount: 67150,
  	                },
	        ]
	        },
	        {
		label: "Dividendid",
		amount: 5680000,
		color: '#134',
                },
	        {
		label: "Toetused",
		amount: 78983020,
		color: '#245',
		children: [    	
  	                {
  		        label: "Riigilt jm institutsioonidelt",
  		        amount: 77000000,
  	                },
  	                {
  		        label: "Välisrahastus",
  		        amount: 1983020,
  	                },
  	                {
  		        label: "Välisprojektide kaasfinantseerimine",
  		        amount: 0,
  	                },
	        ]
	        },
	]
        }

$(function() {
	new BubbleTree({
		data: data,
		container: '.bubbletree'
	});
});