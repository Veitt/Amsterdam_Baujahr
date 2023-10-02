var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_baujahr_amsterdam__bouwjaar_1 = new ol.format.GeoJSON();
var features_baujahr_amsterdam__bouwjaar_1 = format_baujahr_amsterdam__bouwjaar_1.readFeatures(json_baujahr_amsterdam__bouwjaar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baujahr_amsterdam__bouwjaar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baujahr_amsterdam__bouwjaar_1.addFeatures(features_baujahr_amsterdam__bouwjaar_1);
var lyr_baujahr_amsterdam__bouwjaar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_baujahr_amsterdam__bouwjaar_1, 
                style: style_baujahr_amsterdam__bouwjaar_1,
                interactive: true,
    title: 'baujahr_amsterdam__bouwjaar<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_1_0.png" /> 1850 - 1927<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_1_1.png" /> 1927 - 1960<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_1_2.png" /> 1960 - 1986<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_1_3.png" /> 1986 - 2001<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_1_4.png" /> 2001 - 2019<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_baujahr_amsterdam__bouwjaar_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_baujahr_amsterdam__bouwjaar_1];
lyr_baujahr_amsterdam__bouwjaar_1.set('fieldAliases', {'fid': 'fid', 'Bouwjaar': 'Bouwjaar', });
lyr_baujahr_amsterdam__bouwjaar_1.set('fieldImages', {'fid': 'TextEdit', 'Bouwjaar': 'Range', });
lyr_baujahr_amsterdam__bouwjaar_1.set('fieldLabels', {'fid': 'no label', 'Bouwjaar': 'no label', });
lyr_baujahr_amsterdam__bouwjaar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});