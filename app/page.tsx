"use client";

import { useEffect, useRef, useState } from "react";

const teaDrinks = [
  "蜜雪冰城－冰鲜柠檬水", "蜜雪冰城－摩天脆脆冰淇淋", "蜜雪冰城－茉莉奶绿", "蜜雪冰城－棒打鲜橙", "蜜雪冰城－满杯百香果",
  "古茗－超A芝士葡萄", "古茗－古茗奶茶", "古茗－云岭茉莉白", "古茗－杨枝甘露", "古茗－芝士莓莓",
  "沪上阿姨－血糯米奶茶", "沪上阿姨－超嗲草莓大福", "沪上阿姨－芋泥波波奶茶", "沪上阿姨－杨枝甘露",
  "茶百道－杨枝甘露", "茶百道－豆乳玉麒麟", "茶百道－茉莉奶绿", "茶百道－招牌芋圆奶茶", "茶百道－超级杯水果茶",
  "霸王茶姬－伯牙绝弦", "霸王茶姬－桂馥兰香", "霸王茶姬－万里木兰", "霸王茶姬－花田乌龙",
  "益禾堂－益禾烤奶", "益禾堂－薄荷奶绿", "益禾堂－四季春轻乳茶", "益禾堂－泷珠奶茶",
  "甜啦啦－一桶水果茶", "甜啦啦－黑糖珍珠奶茶", "甜啦啦－芒果摇摇杯", "甜啦啦－冰淇淋红茶",
  "书亦烧仙草－书亦烧仙草", "书亦烧仙草－橙漫山茶花", "书亦烧仙草－葡萄芋圆冻冻", "书亦烧仙草－杨枝甘露烧仙草",
  "喜茶－多肉葡萄", "喜茶－芝芝莓莓", "喜茶－烤黑糖波波牛乳", "喜茶－绿妍纯茶",
  "奈雪的茶－霸气芝士草莓", "奈雪的茶－霸气橙子", "奈雪的茶－鸭屎香宝藏茶", "奈雪的茶－茉莉初雪",
  "CoCo都可－鲜百香双响炮", "CoCo都可－珍珠奶茶", "CoCo都可－青稞牛奶", "CoCo都可－奶茶三兄弟",
  "1点点－四季奶青＋波霸", "1点点－冰淇淋红茶", "1点点－波霸奶茶", "1点点－阿华田",
  "茶颜悦色－幽兰拿铁", "茶颜悦色－声声乌龙", "茶颜悦色－筝筝纸鸢", "茶颜悦色－桂花弄", "茶颜悦色－凤栖绿桂",
  "爷爷不泡茶－荔枝冰酿", "爷爷不泡茶－空山栀子", "爷爷不泡茶－武汉茉莉", "爷爷不泡茶－兰香青柠",
  "茉莉奶白－茉莉奶白", "茉莉奶白－开心果茉莉椰", "茉莉奶白－白兰拿铁", "茉莉奶白－栀子奶白",
  "乐乐茶－草莓酪酪", "乐乐茶－葡萄酪酪", "乐乐茶－脏脏茶", "乐乐茶－脏脏包",
  "7分甜－杨枝甘露", "7分甜－芒椰小丸子", "7分甜－芒果西米露", "7分甜－酸奶杨枝甘露",
  "柠季－招牌手打柠檬茶", "柠季－鸭屎香柠檬茶", "柠季－渣男柠檬茶", "柠季－泰绿柠檬茶",
  "LINLEE林里－招牌手打柠檬茶", "LINLEE林里－单丛鸭屎香柠檬茶", "LINLEE林里－黄皮柠檬茶", "LINLEE林里－白葡萄冰柠茶",
  "丘大叔柠檬茶－鸭屎香柠檬茶", "丘大叔柠檬茶－黄皮柠檬茶", "丘大叔柠檬茶－手打香水柠檬茶",
  "茶话弄－梅占摇红", "茶话弄－桂花引", "茶话弄－观音拿铁", "茶话弄－长安鲜奶茶",
  "茶救星球－桂花龙井鲜奶茶", "茶救星球－栀子花香鲜奶茶", "茶救星球－茉莉鲜奶茶",
  "茉酸奶－原味酸奶奶昔", "茉酸奶－牛油果酸奶奶昔", "茉酸奶－巴旦木酸奶奶昔", "茉酸奶－芒果酸奶奶昔",
  "一只酸奶牛－酸奶紫米露", "一只酸奶牛－牛油果酸奶", "一只酸奶牛－芒果酸奶", "一只酸奶牛－燕麦酸奶紫米露",
  "悸动烧仙草－悸动烧仙草", "悸动烧仙草－杨枝甘露烧仙草", "悸动烧仙草－芋泥烧仙草", "悸动烧仙草－招牌奶茶",
  "快乐番薯－招牌珍珠奶茶", "快乐番薯－手作芋圆烧仙草", "快乐番薯－杨枝甘露", "快乐番薯－烤奶",
  "吾饮良品－吾饮奶茶", "吾饮良品－葡萄芋圆冻冻", "吾饮良品－烧仙草奶茶", "吾饮良品－杨枝甘露",
  "KOI Thé－黄金珍珠奶茶", "KOI Thé－芋圆奶茶", "KOI Thé－玛奇朵茶", "KOI Thé－乌龙鲜奶茶",
  "贡茶－奶盖茶", "贡茶－熊猫奶盖茶", "贡茶－珍珠奶茶", "贡茶－芋泥奶茶",
  "卡旺卡－黑全套奶茶", "卡旺卡－桂花酒酿奶茶", "卡旺卡－手作芋泥奶茶", "卡旺卡－酸奶紫米露",
  "茶理宜世－锡兰鲜奶茶", "茶理宜世－鸭屎香鲜奶茶", "茶理宜世－香水柠檬茶", "茶理宜世－栀子花茶",
  "阿水大杯茶－大杯奶茶", "阿水大杯茶－茉莉奶绿", "阿水大杯茶－芋泥波波", "阿水大杯茶－鲜果桶",
  "新时沏－招牌奶茶", "新时沏－杨枝甘露", "新时沏－芋泥奶茶", "新时沏－鲜果茶",
  "果呀呀－超级水果茶", "果呀呀－芒果雪乐", "果呀呀－草莓鲜果茶", "果呀呀－葡萄鲜果茶",
  "手作阿嬷－阿嬷手作奶茶", "手作阿嬷－芋泥鲜奶", "手作阿嬷－麻薯奶茶", "手作阿嬷－仙草奶茶",
];

const coffeeDrinks = [
  "瑞幸咖啡－生椰拿铁", "瑞幸咖啡－丝绒拿铁", "瑞幸咖啡－陨石拿铁", "瑞幸咖啡－橙C美式", "瑞幸咖啡－精萃澳瑞白",
  "库迪咖啡－生椰拿铁", "库迪咖啡－厚乳拿铁", "库迪咖啡－米乳拿铁", "库迪咖啡－标准美式", "库迪咖啡－果咖",
  "星巴克－拿铁", "星巴克－焦糖玛奇朵", "星巴克－馥芮白", "星巴克－冷萃", "星巴克－香草拿铁", "星巴克－摩卡",
  "幸运咖－经典冰拿铁", "幸运咖－椰椰拿铁", "幸运咖－冰美式", "幸运咖－厚乳拿铁", "幸运咖－冰淇淋咖啡",
  "NOWWA挪瓦咖啡－生椰拿铁", "NOWWA挪瓦咖啡－厚乳拿铁", "NOWWA挪瓦咖啡－燕麦拿铁", "NOWWA挪瓦咖啡－果味美式",
  "Manner Coffee－招牌拿铁", "Manner Coffee－冰橙美式", "Manner Coffee－澳白", "Manner Coffee－燕麦拿铁", "Manner Coffee－手冲",
  "肯悦咖啡－经典美式", "肯悦咖啡－拿铁", "肯悦咖啡－爆汁葡萄气泡美式", "肯悦咖啡－燕麦拿铁",
  "沪咖－生椰拿铁", "沪咖－厚乳拿铁", "沪咖－经典美式", "沪咖－燕麦拿铁",
  "Tims天好咖啡－鲜萃咖啡", "Tims天好咖啡－加倍拿铁", "Tims天好咖啡－枫味玛奇朵", "Tims天好咖啡－浓醇²拿铁", "Tims天好咖啡－冰博克咖啡",
  "M Stand－脆巧曲奇拿铁", "M Stand－椰子冰咖啡", "M Stand－脏脏拿铁", "M Stand－澳白", "M Stand－冰摇香橙美式",
  "COSTA Coffee－馥芮白", "COSTA Coffee－拿铁", "COSTA Coffee－卡布奇诺", "COSTA Coffee－榛果拿铁",
  "Peet’s皮爷咖啡－精品拿铁", "Peet’s皮爷咖啡－澳白", "Peet’s皮爷咖啡－冷萃", "Peet’s皮爷咖啡－手冲单品", "Peet’s皮爷咖啡－美式",
  "Lavazza拉瓦萨－意式浓缩", "Lavazza拉瓦萨－卡布奇诺", "Lavazza拉瓦萨－水牛乳清甜拿铁", "Lavazza拉瓦萨－拿铁", "Lavazza拉瓦萨－提拉米苏风味咖啡",
  "% Arabica－西班牙拿铁", "% Arabica－Kyoto Latte", "% Arabica－拿铁", "% Arabica－浓缩玛奇朵", "% Arabica－单品手冲",
  "Blue Bottle Coffee－新奥尔良冰咖啡", "Blue Bottle Coffee－Gibraltar", "Blue Bottle Coffee－单品手冲", "Blue Bottle Coffee－冷萃",
  "Seesaw Coffee－精品拿铁", "Seesaw Coffee－创意果咖", "Seesaw Coffee－澳白", "Seesaw Coffee－单品手冲",
  "麦咖啡－麦咖啡拿铁", "麦咖啡－澳白", "麦咖啡－美式", "麦咖啡－燕麦拿铁",
  "太平洋咖啡－经典拿铁", "太平洋咖啡－美式", "太平洋咖啡－卡布奇诺", "太平洋咖啡－手调咖啡",
  "代数学家咖啡－玫瑰拿铁", "代数学家咖啡－澳白", "代数学家咖啡－开心果风味拿铁", "代数学家咖啡－手冲",
  "GRID Coffee－Dirty", "GRID Coffee－澳白", "GRID Coffee－浓缩", "GRID Coffee－单一产区手冲",
  "比星咖啡－厚乳拿铁", "比星咖啡－生椰拿铁", "比星咖啡－美式", "比星咖啡－果咖",
  "本来不该有·鲜果咖啡－鲜果美式", "本来不该有·鲜果咖啡－橙子咖啡", "本来不该有·鲜果咖啡－葡萄咖啡", "本来不该有·鲜果咖啡－生椰拿铁",
];

type WheelProps = {
  kind: "tea" | "coffee";
  eyebrow: string;
  title: string;
  subtitle: string;
  items: string[];
  onPicked: (item: string) => void;
};

function Wheel({ kind, eyebrow, title, subtitle, items, onPicked }: WheelProps) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("等待开转");
  const [liveItem, setLiveItem] = useState(items[0]);
  const previousIndex = useRef(-1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ticker = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
    if (ticker.current) clearInterval(ticker.current);
  }, []);

  function pickIndex() {
    const bytes = new Uint32Array(1);
    crypto.getRandomValues(bytes);
    let index = bytes[0] % items.length;
    if (items.length > 1 && index === previousIndex.current) index = (index + 1) % items.length;
    previousIndex.current = index;
    return index;
  }

  function spin() {
    if (spinning) return;
    const selected = items[pickIndex()];
    const extraTurns = 5 + Math.floor(Math.random() * 3);
    const landing = Math.floor(Math.random() * 360);
    setSpinning(true);
    setResult("正在替你纠结…");
    setRotation((current) => current + extraTurns * 360 + landing);
    ticker.current = setInterval(() => {
      setLiveItem(items[Math.floor(Math.random() * items.length)]);
    }, 85);
    timer.current = setTimeout(() => {
      if (ticker.current) clearInterval(ticker.current);
      setLiveItem(selected);
      setResult(selected);
      setSpinning(false);
      onPicked(selected);
    }, 2300);
  }

  return (
    <article className={`wheel-card ${kind}`}>
      <div className="card-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="wheel-stage" aria-hidden="true">
        <div className="pointer" />
        <div className="wheel-shadow" />
        <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="wheel-lines" />
        </div>
        <div className={`live-display ${spinning ? "is-spinning" : ""}`}>
          <span>{liveItem.split("－")[0]}</span>
          <strong>{liveItem.split("－")[1]}</strong>
          <small>{items.length} 款候选</small>
        </div>
      </div>
      <div className={`result ${spinning ? "thinking" : ""}`} aria-live="polite">
        <span>本次手气</span><strong>{result}</strong>
      </div>
      <button className="spin-button" onClick={spin} disabled={spinning}>
        <span>{spinning ? "转动中" : "帮我选一杯"}</span><i aria-hidden="true">↗</i>
      </button>
    </article>
  );
}

export default function Home() {
  const [latest, setLatest] = useState<string[]>([]);
  function remember(item: string) { setLatest((items) => [item, ...items.filter((old) => old !== item)].slice(0, 4)); }

  return (
    <main>
      <header className="hero">
        <div className="brand-mark" aria-hidden="true"><span>选</span></div>
        <p className="kicker">TODAY’S LITTLE DECISION</p>
        <h1>喝什么，<em>转一下。</em></h1>
        <p className="intro">两只转盘，{teaDrinks.length + coffeeDrinks.length} 个认真筛过的答案。<br />把选择交给手气，把好心情留给自己。</p>
        <div className="scroll-note"><span /> 向下开转</div>
      </header>
      <section className="wheels" aria-label="饮品随机转盘">
        <Wheel kind="tea" eyebrow="TEA · 01" title="今天喝茶" subtitle="鲜奶茶、果茶、柠檬茶与酸奶，一起加入候选。" items={teaDrinks} onPicked={remember} />
        <Wheel kind="coffee" eyebrow="COFFEE · 02" title="今天喝咖啡" subtitle="从平价连锁到精品咖啡，随机遇见一杯。" items={coffeeDrinks} onPicked={remember} />
      </section>
      <section className="history" aria-label="最近抽中">
        <div><span className="eyebrow">RECENT PICKS</span><h3>刚才的手气</h3></div>
        {latest.length ? <ol>{latest.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol> : <p className="empty">还没有记录，去转出今天的第一杯。</p>}
      </section>
      <footer><span>选择困难症临时解药</span><span>菜单会因城市与季节变化，请以下单页面为准</span></footer>
    </main>
  );
}
