function fancyBarcode(data) {
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,})\1/g;

    let n = Number(data.shift());

    for (let i = 0; i < n; i++) {
        let barcode = data[i];

        let match = pattern.exec(barcode);
        let concateDigits = '';
        let isValid = false;

        while (match != null) {
            isValid = true;
            let barcodeText = match[2];
            for (let ch of barcodeText) {
                if (!isNaN(Number(ch))) {
                    concateDigits += ch;
                }
            }

            match = pattern.exec(barcode);
        }
        if (isValid) {
            concateDigits = concateDigits !== '' ? concateDigits : '00';
            console.log(`Product group: ${concateDigits}`);
        }else{
            console.log('Invalid barcode');
        }
    }
}

fancyBarcode(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
fancyBarcode([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#',
]);
