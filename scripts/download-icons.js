const fs = require('fs')
const path = require('path')
const https = require('https')

const icons = [
  'amazonaws',
  'docker',
  'kubernetes',
  'java',
  'python',
  'go',
  'php',
  'csharp',
  'react',
  'nodedotjs',
  'nextdotjs',
  'laravel',
  'spring',
  'tensorflow',
  'pytorch',
  'scikitlearn',
  'gnubash',
  'terraform',
  'jenkins',
  'grafana',
  'newrelic',
]

const outDir = path.join(__dirname, '..', 'public', 'icons')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function download(slug) {
  return new Promise((resolve, reject) => {
    const url = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`
    const dest = path.join(outDir, `${slug}.svg`)
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) return reject(new Error(`Failed to fetch ${slug}: ${res.statusCode}`))
        const file = fs.createWriteStream(dest)
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', reject)
  })
}

;(async () => {
  for (const slug of icons) {
    try {
      process.stdout.write(`Downloading ${slug}... `)
      await download(slug)
      console.log('OK')
    } catch (e) {
      console.error('ERR', e.message || e)
    }
  }
})()
