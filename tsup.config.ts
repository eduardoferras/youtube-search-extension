import { defineConfig } from 'tsup'
import { resolve } from 'node:path'
import Asset from './src/types/asset.types'
import { cpSync } from 'node:fs'

export default defineConfig({
	entry: ['src/service-worker.ts'],
	format: ['cjs'],
	target: 'es2023',
	clean: true,
	outDir: 'dist',
	sourcemap: true,
	minify: true,
	async onSuccess() {
		const assetsFiles: Asset[] = [
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
