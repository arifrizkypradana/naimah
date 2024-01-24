var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_padang_1 = new ol.format.GeoJSON();
var features_padang_1 = format_padang_1.readFeatures(json_padang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_padang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_padang_1.addFeatures(features_padang_1);
var lyr_padang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_padang_1, 
                style: style_padang_1,
                interactive: true,
                title: '<img src="styles/legend/padang_1.png" /> padang'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_photos_3 = new ol.format.GeoJSON();
var features_photos_3 = format_photos_3.readFeatures(json_photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_3.addFeatures(features_photos_3);
var lyr_photos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_3, 
                style: style_photos_3,
                interactive: true,
                title: '<img src="styles/legend/photos_3.png" /> photos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_padang_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_photos_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_padang_1,lyr_Jalan_2,lyr_photos_3];
lyr_padang_1.set('fieldAliases', {});
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', });
lyr_photos_3.set('fieldAliases', {'REMARKS': 'REMARKS', 'BUKA&TUTUP': 'BUKA&TUTUP', 'FASILITAS': 'FASILITAS', 'JUMLAH LAP': 'JUMLAH LAP', 'KONDISI': 'KONDISI', 'HARGA SEWA': 'HARGA SEWA', 'GAMBAR LAP': 'GAMBAR LAP', });
lyr_padang_1.set('fieldImages', {});
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', });
lyr_photos_3.set('fieldImages', {'REMARKS': 'TextEdit', 'BUKA&TUTUP': 'TextEdit', 'FASILITAS': 'TextEdit', 'JUMLAH LAP': 'TextEdit', 'KONDISI': 'TextEdit', 'HARGA SEWA': 'TextEdit', 'GAMBAR LAP': 'ExternalResource', });
lyr_padang_1.set('fieldLabels', {});
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', });
lyr_photos_3.set('fieldLabels', {'REMARKS': 'inline label', 'BUKA&TUTUP': 'inline label', 'FASILITAS': 'inline label', 'JUMLAH LAP': 'inline label', 'KONDISI': 'inline label', 'HARGA SEWA': 'inline label', 'GAMBAR LAP': 'inline label', });
lyr_photos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});