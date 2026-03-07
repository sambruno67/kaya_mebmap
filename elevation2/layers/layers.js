ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.355045, 13.011522, -0.935739, 13.321374]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
var format_Occupationdesterres2024_2 = new ol.format.GeoJSON();
var features_Occupationdesterres2024_2 = format_Occupationdesterres2024_2.readFeatures(json_Occupationdesterres2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Occupationdesterres2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Occupationdesterres2024_2.addFeatures(features_Occupationdesterres2024_2);
var lyr_Occupationdesterres2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Occupationdesterres2024_2, 
                style: style_Occupationdesterres2024_2,
                popuplayertitle: 'Occupation des terres 2024',
                interactive: false,
    title: 'Occupation des terres 2024<br />\
    <img src="styles/legend/Occupationdesterres2024_2_0.png" /> Agglomeration<br />\
    <img src="styles/legend/Occupationdesterres2024_2_1.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Occupationdesterres2024_2_2.png" /> Sol nu<br />\
    <img src="styles/legend/Occupationdesterres2024_2_3.png" /> Affleurement rocheux<br />\
    <img src="styles/legend/Occupationdesterres2024_2_4.png" /> Forêt galerie<br />\
    <img src="styles/legend/Occupationdesterres2024_2_5.png" /> Stepp arborée<br />\
    <img src="styles/legend/Occupationdesterres2024_2_6.png" /> Stepp arbustive ou arborée<br />\
    <img src="styles/legend/Occupationdesterres2024_2_7.png" /> Zone de culture<br />\
    <img src="styles/legend/Occupationdesterres2024_2_8.png" /> Culture irriguée<br />\
    <img src="styles/legend/Occupationdesterres2024_2_9.png" /> <br />' });
var format_Occupationdesterres2016_3 = new ol.format.GeoJSON();
var features_Occupationdesterres2016_3 = format_Occupationdesterres2016_3.readFeatures(json_Occupationdesterres2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Occupationdesterres2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Occupationdesterres2016_3.addFeatures(features_Occupationdesterres2016_3);
var lyr_Occupationdesterres2016_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Occupationdesterres2016_3, 
                style: style_Occupationdesterres2016_3,
                popuplayertitle: 'Occupation des terres 2016',
                interactive: false,
    title: 'Occupation des terres 2016<br />\
    <img src="styles/legend/Occupationdesterres2016_3_0.png" /> Agglomeration<br />\
    <img src="styles/legend/Occupationdesterres2016_3_1.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Occupationdesterres2016_3_2.png" /> Sol nu<br />\
    <img src="styles/legend/Occupationdesterres2016_3_3.png" /> Affleurement rocheux<br />\
    <img src="styles/legend/Occupationdesterres2016_3_4.png" /> Forêt galerie<br />\
    <img src="styles/legend/Occupationdesterres2016_3_5.png" /> Stepp arborée<br />\
    <img src="styles/legend/Occupationdesterres2016_3_6.png" /> Stepp arbustive ou arborée<br />\
    <img src="styles/legend/Occupationdesterres2016_3_7.png" /> Zone de culture<br />\
    <img src="styles/legend/Occupationdesterres2016_3_8.png" /> Culture irriguée<br />\
    <img src="styles/legend/Occupationdesterres2016_3_9.png" /> <br />' });
var format_Localit_4 = new ol.format.GeoJSON();
var features_Localit_4 = format_Localit_4.readFeatures(json_Localit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_Occupationdesterres2024_2.setVisible(true);lyr_Occupationdesterres2016_3.setVisible(true);lyr_Localit_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeKaya_1,lyr_Occupationdesterres2024_2,lyr_Occupationdesterres2016_3,lyr_Localit_4];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Occupationdesterres2024_2.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Occupationdesterres2016_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Localit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', 'lat': 'lat', 'long': 'long', 'POPULATION': 'POPULATION', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Occupationdesterres2024_2.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Occupationdesterres2016_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Localit_4.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'inline label - visible with data', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Occupationdesterres2024_2.set('fieldLabels', {'VALUE': 'no label', });
lyr_Occupationdesterres2016_3.set('fieldLabels', {'VALUE': 'no label', });
lyr_Localit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', 'lat': 'no label', 'long': 'no label', 'POPULATION': 'no label', });
lyr_Localit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});