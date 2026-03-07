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
var lyr_Troisiemedimention_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Troisieme dimention<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Troisiemedimention_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149732.732832, 1461825.953425, -105287.940408, 1495693.099935]
        })
    });
var lyr_Altitude_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Altitude<br />\
    <img src="styles/legend/Altitude_2_0.png" /> 279,9127<br />\
    <img src="styles/legend/Altitude_2_1.png" /> 336,0885<br />\
    <img src="styles/legend/Altitude_2_2.png" /> 392,2642<br />\
    <img src="styles/legend/Altitude_2_3.png" /> 448,4400<br />\
    <img src="styles/legend/Altitude_2_4.png" /> 504,6158<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Altitude_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149732.732832, 1461825.953425, -105287.940408, 1495693.099935]
        })
    });
var format_CommunedeKaya_3 = new ol.format.GeoJSON();
var features_CommunedeKaya_3 = format_CommunedeKaya_3.readFeatures(json_CommunedeKaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeKaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeKaya_3.addFeatures(features_CommunedeKaya_3);
var lyr_CommunedeKaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeKaya_3, 
                style: style_CommunedeKaya_3,
                popuplayertitle: 'Commune de Kaya',
                interactive: false,
                title: '<img src="styles/legend/CommunedeKaya_3.png" /> Commune de Kaya'
            });
var format_Courbedeniveau_4 = new ol.format.GeoJSON();
var features_Courbedeniveau_4 = format_Courbedeniveau_4.readFeatures(json_Courbedeniveau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau_4.addFeatures(features_Courbedeniveau_4);
var lyr_Courbedeniveau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau_4, 
                style: style_Courbedeniveau_4,
                popuplayertitle: 'Courbe de niveau',
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau_4.png" /> Courbe de niveau'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Troisiemedimention_1.setVisible(true);lyr_Altitude_2.setVisible(true);lyr_CommunedeKaya_3.setVisible(true);lyr_Courbedeniveau_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Troisiemedimention_1,lyr_Altitude_2,lyr_CommunedeKaya_3,lyr_Courbedeniveau_4];
lyr_CommunedeKaya_3.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Courbedeniveau_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_CommunedeKaya_3.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Courbedeniveau_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CommunedeKaya_3.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Courbedeniveau_4.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_Courbedeniveau_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});