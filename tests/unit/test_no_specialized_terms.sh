#!/usr/bin/env bash
# test_no_specialized_terms.sh: Project SAGE is the generic base model.
# Fails if any specialized-team (fork) naming convention appears in tracked text files.
# Terms are stored only as SHA-256 hashes of lowercased words / word pairs.
set -uo pipefail
cd "$(dirname "$0")/../.." || exit 1
SELF=tests/unit/test_no_specialized_terms.sh
HASHES='
  17779b11c2c91adc26b5bd225475a49508fcf54569463c9e9577428e0c05ad51
  5222616aa6f581abab5bef849dc9f528a44fbbf245838440176feb60733dd913
  855780ab22c9d50fd56efb03a76a710cb379827f4ed5f7d47db19cde9cc7c353
  b7cf814ac95348a4a0364995afb3fd89eb8caba65e510181af21726236a91337
  e0bcf4a437ccca23e109302be4567448c17d7c6801e7796ea0112784a3d25f9a
  0a8e3305319d2b98455c7dd36ae96bc7863f0483ff5b53c5cef56bf7ce186b1f
  26338ca0af16f3482337eb70dfa651d65731bb0faf5b9b09aa311406939e83cb
  64675d75062bfbad647160e7e262988479023af3b4a3a0bad1671d8914b2bdfe
  440a8ccd91dfa4d1ba861a3886ab544db7feb1fd2a48d3211f1c5147a2521b67
  458c794110c50d29bc46ffadca752f21874acc1ae2754e90fa584ce53bd6eae4
  1b2ee055072ad7f68c05a828393967d407ea160383daae962112166979008bac
  fe6d6dc45ad6660e8e4c81f815a98ab60a1cb7e5f6054634c485646ed3b72ac4
  b3757001d49684670cf26aef7ea64769ca90087f735f8d28e16e4ef9d6b2c560
  d5254eff5dc1425ecb5cb12599c20f00bc97d150828e4a8eaa55083665a12751
  6e885b857804f868c79c20c78f03696636427565a4fbac95d7352d8530bfadf1
  cf761f9d429efcb7d16bbb4edbc7afc553ad302c261a7be495610bf5324fbeb2
  b39986be37ae3f4b6cc5dcb83e85e664ff80780aa79a5d3757648c532f2bef6d
  c7e11cd6357f4179d82b7e293cab8dc3681a2ec1596a704fe339eb84cc710504
  4498594b479f5f036c4c963341a0c32d5b3bf14a15e1b095de203cbc6b323d84
  bc510460585941ac24459d88ce995b3787baebed597ba6d0769efc094e2bdf59
  6b9c8f869c241cb47faac88c4e9f1f2fb29316ebf94a6d74ad2ae2707913e221
  24196f8a6feeb465c790774d3f85b53a2cdf84ed1e0044c420086c4310c3f56e
  6834316e473707dc2922212dba5df97867398e2bf2d87fb7f196bb14f784c83c
'
git ls-files -z | grep -zv -e "^$SELF\$" -e '\.jpg$' -e '\.png$' -e '\.ico$' | HASHES="$HASHES" python3 -c '
import hashlib,os,re,sys
bad=set(os.environ["HASHES"].split())
pats=[re.compile(p) for p in (r"\bJC-[A-Z0-9]", r"\bM-20[0-9]{2}-0[0-9]{2}\b", r"\bADR-001[0-9]\b")]
h=lambda s: hashlib.sha256(s.encode()).hexdigest()
fails=0
for f in sys.stdin.read().split("\0"):
    if not f: continue
    try: txt=open(f,encoding="utf-8").read()
    except Exception: continue
    for n,line in enumerate(txt.splitlines(),1):
        toks=re.findall(r"[a-z0-9]+(?:-[a-z0-9]+)*", line.lower())
        cands=set(toks)|{p for t in toks for p in t.split("-")}|{a+" "+b for a,b in zip(toks,toks[1:])}
        if any(h(c) in bad for c in cands) or any(p.search(line) for p in pats):
            print(f"{f}:{n}: banned term"); fails+=1
sys.exit(1 if fails else 0)
' || { echo "FAIL banned specialized-team terms found"; exit 1; }
echo "ok   no banned specialized-team terms"
