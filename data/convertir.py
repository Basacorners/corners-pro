import pandas as pd
import json

archivo = "Base de datos C 16-18 May 2026.xlsx"

df = pd.read_excel(archivo, header=None)

result = []

for i in range(len(df)):

    try:
        fila = df.iloc[i]

        # Detectar si hay nombre de equipo válido
        equipo = fila[5]

        if not isinstance(equipo, str):
            continue
        
        liga = fila[4]

        # LOCAL
        prom_local = fila[3]
        fd_local = fila[9]

        if isinstance(prom_local, (int, float)) and isinstance(fd_local, (int, float)):
            result.append({
                "liga": str(liga),
                "equipo": str(equipo),
                "rol": "Local",
                "prom": float(prom_local),
                "FD": float(fd_local)
            })

        # VISITANTE
        prom_visit = fila[6]
        fd_visit = fila[10]

        if isinstance(prom_visit, (int, float)) and isinstance(fd_visit, (int, float)):
            result.append({
                "liga": str(liga),
                "equipo": str(equipo),
                "rol": "Visitante",
                "prom": float(prom_visit),
                "FD": float(fd_visit)
            })

    except:
        continue


# Guardar JSON
with open("corners.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"✅ JSON generado correctamente → {len(result)} registros")