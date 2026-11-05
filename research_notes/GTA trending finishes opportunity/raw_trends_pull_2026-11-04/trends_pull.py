import time, json, sys
import pandas as pd
from pytrends.request import TrendReq

OUT = sys.argv[1]
TF = '2019-01-01 2026-11-01'
pt = TrendReq(hl='en-CA', tz=300, retries=3, backoff_factor=3)

batches = {
 'b1': ['limewash','microcement','venetian plaster','roman clay','tadelakt'],
 'b2': ['limewash','lime plaster','clay plaster','polished plaster','mineral paint'],
 'b3': ['limewash','german smear','brick staining','thin brick','brick slips'],
 'b4': ['limewash','fluted wall panels','slat wall panels','wood slat wall','acoustic panels'],
 'b5': ['limewash','board and batten','wainscoting','colour drenching','wallpaper mural'],
 'b6': ['limewash','grasscloth wallpaper','terrazzo','polished concrete','microcement bathroom'],
 'b7': ['limewash','shou sugi ban','plaster range hood','plaster fireplace','arched doorway'],
 'b8': ['limewash','textured walls','stucco','smooth stucco','romabio'],
 'b9': ['limewash','keim','lime paint','limewash brick','wood slat ceiling'],
 'b10':['limewash','microtopping','micro cement','plaster walls','lime wash'],
 'b11':['limewash','color drenching','wall paneling','accent wall','wallpaper'],
 'b12':['limewash','limewash paint','venetian plaster walls','plaster finish','textured wall'],
}
results = {}
def pull(terms, geo, key):
    for attempt in range(4):
        try:
            pt.build_payload(terms, geo=geo, timeframe=TF)
            df = pt.interest_over_time()
            if df.empty:
                results[key] = {}
            else:
                df = df.drop(columns=['isPartial'], errors='ignore')
                results[key] = {c: {str(i.date()): int(v) for i, v in df[c].items()} for c in df.columns}
            print('ok', key, {c: (df[c].max() if not df.empty else 0) for c in df.columns} if not df.empty else 'EMPTY', flush=True)
            return
        except Exception as e:
            print('ERR', key, attempt, repr(e)[:120], flush=True)
            time.sleep(20 * (attempt + 1))
    results[key] = None

for geo in ['CA', 'CA-ON']:
    for b, terms in batches.items():
        pull(terms, geo, f'{geo}|{b}')
        time.sleep(4)
    json.dump(results, open(OUT, 'w'))
json.dump(results, open(OUT, 'w'))
print('DONE')
