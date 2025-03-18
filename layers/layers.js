var wms_layers = [];

var lyr_Digitalniortofotoumjerilu15000_2020godina_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.dgu.hr/services/inspire/orthophoto_2020/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Digitalni ortofoto u mjerilu 1:5000_2020. godina',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Digitalniortofotoumjerilu15000_2020godina_0, 0]);
var format_T_HIDRANT_1 = new ol.format.GeoJSON();
var features_T_HIDRANT_1 = format_T_HIDRANT_1.readFeatures(json_T_HIDRANT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_HIDRANT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_HIDRANT_1.addFeatures(features_T_HIDRANT_1);
var lyr_T_HIDRANT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_HIDRANT_1, 
                style: style_T_HIDRANT_1,
                popuplayertitle: 'T_HIDRANT',
                interactive: false,
                title: '<img src="styles/legend/T_HIDRANT_1.png" /> T_HIDRANT'
            });

lyr_Digitalniortofotoumjerilu15000_2020godina_0.setVisible(true);lyr_T_HIDRANT_1.setVisible(true);
var layersList = [lyr_Digitalniortofotoumjerilu15000_2020godina_0,lyr_T_HIDRANT_1];
lyr_T_HIDRANT_1.set('fieldAliases', {'ID': 'ID', });
lyr_T_HIDRANT_1.set('fieldImages', {'ID': 'Range', });
lyr_T_HIDRANT_1.set('fieldLabels', {'ID': 'no label', });
lyr_T_HIDRANT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});