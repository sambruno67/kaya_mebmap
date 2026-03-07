var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunedeKaya_1 = new ol.format.GeoJSON();
var features_CommunedeKaya_1 = format_CommunedeKaya_1.readFeatures(json_CommunedeKaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeKaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeKaya_1.addFeatures(features_CommunedeKaya_1);
var lyr_CommunedeKaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeKaya_1, 
                style: style_CommunedeKaya_1,
                popuplayertitle: 'Commune de Kaya',
                interactive: false,
                title: '<img src="styles/legend/CommunedeKaya_1.png" /> Commune de Kaya'
            });
var lyr_Variationdelapopulationde20202024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Variation de la population de 2020 à 2024<br />\
    <img src="styles/legend/Variationdelapopulationde20202024_2_0.png" /> 2,1590<br />\
    <img src="styles/legend/Variationdelapopulationde20202024_2_1.png" /> 3,7782<br />\
    <img src="styles/legend/Variationdelapopulationde20202024_2_2.png" /> 5,3974<br />\
    <img src="styles/legend/Variationdelapopulationde20202024_2_3.png" /> 7,0167<br />\
    <img src="styles/legend/Variationdelapopulationde20202024_2_4.png" /> 8,6359<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Variationdelapopulationde20202024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149538.811567, 1461826.508693, -105382.822349, 1495648.374582]
        })
    });
var lyr_Variationdelapopulationde20162020_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Variation de la population de 2016 à 2020<br />\
    <img src="styles/legend/Variationdelapopulationde20162020_3_0.png" /> 2,6619<br />\
    <img src="styles/legend/Variationdelapopulationde20162020_3_1.png" /> 4,6584<br />\
    <img src="styles/legend/Variationdelapopulationde20162020_3_2.png" /> 6,6549<br />\
    <img src="styles/legend/Variationdelapopulationde20162020_3_3.png" /> 8,6513<br />\
    <img src="styles/legend/Variationdelapopulationde20162020_3_4.png" /> 10,6478<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Variationdelapopulationde20162020_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149538.811567, 1461826.508693, -105382.822349, 1495648.374582]
        })
    });
var format_Localit_4 = new ol.format.GeoJSON();
var features_Localit_4 = format_Localit_4.readFeatures(json_Localit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_4.addFeatures(features_Localit_4);
var lyr_Localit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_4, 
                style: style_Localit_4,
                popuplayertitle: 'Localité',
                interactive: true,
                title: '<img src="styles/legend/Localit_4.png" /> Localité'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_Variationdelapopulationde20202024_2.setVisible(true);lyr_Variationdelapopulationde20162020_3.setVisible(true);lyr_Localit_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeKaya_1,lyr_Variationdelapopulationde20202024_2,lyr_Variationdelapopulationde20162020_3,lyr_Localit_4];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Localit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Localit_4.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Localit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', });
lyr_Localit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});