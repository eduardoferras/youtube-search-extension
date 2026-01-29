import { defineConfig } from 'tsup'
import { resolve } from 'node:path'
import { cpSync } from 'node:fs'
interface AssetFile {
	from: string
	to: string
}

export default defineConfig({
	entry: ['src/service-worker.ts'],
	format: ['esm'],
	target: 'es2023',
	clean: true,
	outDir: 'dist',
	sourcemap: true,
	minify: true,
	async onSuccess() {
		const assetsFiles: AssetFile[] = [
			{
				from: resolve(__dirname, 'manifest.json'),
				to: resolve(__dirname, 'dist', 'manifest.json')
			},
			{
				from: resolve(__dirname, 'public', 'icons'),
				to: resolve(__dirname, 'dist', 'icons')
			},
			{
				from: resolve(__dirname, 'src', 'locales'),
				to: resolve(__dirname, 'dist', '_locales')
			}
		]

		assetsFiles.forEach((asset) => {
			cpSync(asset.from, asset.to, { recursive: true })
		})
	}
})
