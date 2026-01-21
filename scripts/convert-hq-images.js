const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = 'C:/Users/yannv/.gemini/antigravity/playground/scalar-corona/public/images/HQ image';
const destDir = 'C:/Users/yannv/.gemini/antigravity/playground/temporal-star/public/images';

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg'));

async function convertImages() {
    for (const file of files) {
        const sourcePath = path.join(sourceDir, file);
        const baseName = file.replace('.jpg', '').replace('Classeur1_Page_', 'Classeur_');
        const destPath = path.join(destDir, `${baseName}.jpg`);

        console.log(`Converting ${file} to ${baseName}.jpg...`);

        await sharp(sourcePath)
            .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .toFile(destPath);

        const stats = fs.statSync(destPath);
        console.log(`  Done: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    }
    console.log('All images converted!');
}

convertImages().catch(console.error);
