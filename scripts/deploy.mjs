// @ts-check
import fs from 'fs-extra'
import path, { dirname } from 'path'
import { execa } from 'execa'
import { fileURLToPath } from 'url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const sourceDir = path.resolve(scriptDir, '..')
const targetDir = path.resolve(sourceDir, 'dist')

const main = async () => {
    await fs.remove(targetDir)

    const packageDir = path.resolve(sourceDir, 'package.json')
    await fs.copy(packageDir, path.resolve(targetDir, 'package.json'))

    await execa('npx', [
        'tsc',
        '--outDir',
        path.resolve(targetDir, 'cjs'),
        '--module',
        'commonjs',
    ], {
        cwd: sourceDir,
        stdio: 'inherit',
    })

    await execa('npx', [
        'tsc',
        '--outDir',
        path.resolve(targetDir, 'es6'),
        '--module',
        'ES6',
    ], {
        cwd: sourceDir,
        stdio: 'inherit',
    })

    await execa('npm', [
        'publish',
        '--userconfig',
        '~/.npmrc_personal'
    ], {
        cwd: targetDir,
        stdio: 'inherit',
    })
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
