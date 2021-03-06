var svg2 = d3.select("svg#second")
var dataset2 = []
var dicoNuances2 = {"EXG":"#d30202", "COM":"#990000", "FI":"#ff1616","SOC":"#f76060","RDG":"#edafaf",
"ECO":"#41992f","DIV":"#d3913b","REG":"#54422b","REM":"#ffbf00","MDM":"#ed9302","UDI":"#536cad","LR":"#3c589e",
"DVD":"#132553","DLF":"#7928b7","FN":"#03174a","EXD":"#000a23","DVG":"#c66b9a"}

d3.csv('data/resultatT2_reel.csv')
.row(function(d, i){
	return {
	code : d.code,
	designation : d["designation"],
	nuance : d.nuance,
	score : d.score
	};
})

.get(function(error, rows){
	dataset2 = rows;
	colorMap();
	});

function colorMap(){
	for(i=0;i < dataset2.length; i++){
		svg2.select('[id='+'"'+dataset2[i].code+'"'+']')
		.style("fill", dicoNuances2[dataset2[i].nuance])
		
	};
};
