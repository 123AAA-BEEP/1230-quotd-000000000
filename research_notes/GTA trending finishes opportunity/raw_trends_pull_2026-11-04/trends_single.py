import time, json, sys
import pandas as pd
from pytrends.request import TrendReq

OUT = sys.argv[1]
TF = '2019-01-01 2026-11-01'
pt = TrendReq(hl='en-CA', tz=300, retries=3, backoff_factor=3)

terms = ['limewash','microcement','venetian plaster','roman clay','tadelakt','lime plaster','clay plaster',
 'mineral paint','german smear','brick staining','thin brick','fluted wall panels','slat wall panels','wood slat wall',
 'acoustic panels','board and batten','wainscoting','colour drenching','wallpaper mural','grasscloth wallpaper',
 'terrazzo','polished concrete','shou sugi ban','plaster range hood','plaster fireplace','arched doorway',
 'textured walls','stucco','keim','lime paint','limewash brick','wood slat ceiling','plaster walls','romabio',
 'limewash paint','microcement bathroom','polished plaster','micro cement','color drenching','textured wall']
res = {}
def pull(kw, geo):
    for attempt in range(4):
        try:
            pt.build_payload([kw], geo=geo, timeframe=TF)
            df = pt.interest_over_time()
            if df.empty:
                res[f'{geo}|{kw}'] = {}
            else:
                res[f'{geo}|{kw}'] = {str(i.date()): int(v) for i, v in df[kw].items()}
            print('ok', geo, kw, flush=True); return
        except Exception as e:
            print('ERR', geo, kw, attempt, repr(e)[:100], flush=True); time.sleep(20*(attempt+1))
    res[f'{geo}|{kw}'] = None

for geo in ['CA','CA-ON']:
    for kw in terms:
        pull(kw, geo); time.sleep(3)
    json.dump(res, open(OUT,'w'))

# person-form / hire-intent batches
pf = {
 'p1': ['limewash toronto','venetian plaster toronto','microcement toronto','plasterer toronto','limewash painter'],
 'p2': ['limewash','limewash painter','venetian plaster contractor','microcement installer','venetian plaster toronto'],
 'p3': ['limewash','limewash contractor','limewash painting','limewash services','limewash near me'],
 'p4': ['limewash','roman clay toronto','microcement installer','microcement contractor','plaster contractor'],
 'p5': ['limewash','limewash interior','limewash walls','limewash fireplace','limewash exterior'],
 'p6': ['limewash','romabio','portola paints','bauwerk','jh wall paints'],
}
for geo in ['CA','CA-ON']:
    for k, tl in pf.items():
        for attempt in range(4):
            try:
                pt.build_payload(tl, geo=geo, timeframe=TF)
                df = pt.interest_over_time()
                if df.empty: res[f'{geo}|{k}'] = {}
                else:
                    df = df.drop(columns=['isPartial'], errors='ignore')
                    res[f'{geo}|{k}'] = {c: {str(i.date()): int(v) for i, v in df[c].items()} for c in df.columns}
                print('ok', geo, k, flush=True); break
            except Exception as e:
                print('ERR', geo, k, attempt, repr(e)[:100], flush=True); time.sleep(20*(attempt+1))
        time.sleep(3)
    json.dump(res, open(OUT,'w'))

# related queries for key terms (CA)
for kw in ['limewash','venetian plaster','microcement','roman clay','plaster walls']:
    for attempt in range(4):
        try:
            pt.build_payload([kw], geo='CA', timeframe='2024-01-01 2026-11-01')
            rq = pt.related_queries()[kw]
            res[f'RQ|{kw}'] = {k: (v.to_dict('records') if v is not None else None) for k, v in rq.items()}
            print('ok RQ', kw, flush=True); break
        except Exception as e:
            print('ERR RQ', kw, attempt, repr(e)[:100], flush=True); time.sleep(20*(attempt+1))
    time.sleep(3)
json.dump(res, open(OUT,'w'))

# interest by region (city) for limewash, microcement, venetian plaster in CA, last 2 yrs
for kw in ['limewash','microcement','venetian plaster','roman clay']:
    for attempt in range(4):
        try:
            pt.build_payload([kw], geo='CA', timeframe='2024-11-01 2026-11-01')
            r = pt.interest_by_region(resolution='CITY', inc_low_vol=True)
            res[f'CITY|{kw}'] = r[kw].sort_values(ascending=False).head(15).to_dict()
            r2 = pt.interest_by_region(resolution='REGION', inc_low_vol=True)
            res[f'REGION|{kw}'] = r2[kw].sort_values(ascending=False).to_dict()
            print('ok CITY', kw, flush=True); break
        except Exception as e:
            print('ERR CITY', kw, attempt, repr(e)[:100], flush=True); time.sleep(20*(attempt+1))
    time.sleep(3)
json.dump(res, open(OUT,'w'))

# US / GB leading indicator batch
for geo in ['US','GB']:
    for attempt in range(4):
        try:
            tl = ['limewash','microcement','venetian plaster','roman clay','tadelakt']
            pt.build_payload(tl, geo=geo, timeframe=TF)
            df = pt.interest_over_time().drop(columns=['isPartial'], errors='ignore')
            res[f'{geo}|b1'] = {c: {str(i.date()): int(v) for i, v in df[c].items()} for c in df.columns}
            print('ok', geo, 'b1', flush=True); break
        except Exception as e:
            print('ERR', geo, attempt, repr(e)[:100], flush=True); time.sleep(20*(attempt+1))
    time.sleep(3)
json.dump(res, open(OUT,'w'))
print('DONE')
