# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['C:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Python/testeSP11.py'],
    pathex=[],
    binaries=[],
    datas=[('C:/Users/kferraz/Documents/programacao/chave010908780.json', '.')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='testeSP11',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
