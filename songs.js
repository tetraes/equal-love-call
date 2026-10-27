// 曲一覧。main=表題曲 / sub=カップリング曲
var SINGLES = [
 {no:1,main:["=LOVE"],sub:["記憶のどこかで","スタート！"]},
 {no:2,main:["僕らの制服クリスマス"],sub:["届いてLOVE YOU♡","ようこそ！イコラブ沼"]},
 {no:3,main:["手遅れcaution"],sub:["樹愛羅、助けに来たぞ","「部活中に目が合うなって思ってたんだ」"]},
 {no:4,main:["Want you! Want you!"],sub:["今、この船に乗れ！","アイカツハッピーエンド"]},
 {no:5,main:["探せ ダイヤモンドリリー"],sub:["いらない ツインテール","虹の素"]},
 {no:6,main:["ズルいよ ズルいね"],sub:["推しのいる世界","Sweetest girl"]},
 {no:7,main:["CAMEO"],sub:["「君と私の歌」","My Voice Is For You"]},
 {no:8,main:["青春“サブリミナル”"],sub:["しゅきぴ","流星群"]},
 {no:9,main:["ウィークエンドシトロン"],sub:["ズッ友案件","夏祭り恋慕う","祝祭"]},
 {no:10,main:["The 5th"],sub:["お姫様にしてよ！","Poison Girl","BPM170の君へ"]},
 {no:11,main:["あの子コンプレックス"],sub:["知らんけど","僕のヒロイン","笑顔のレシピ"]},
 {no:12,main:["Be Selfish"],sub:["好きって、言えなかった","わたし、魔法使い","真夜中マーメイド"]},
 {no:13,main:["この空がトリガー"],sub:["ラブクリエイト","Junkies","Kiara Tiara"]},
 {no:14,main:["ナツマトペ"],sub:["だからとて","ヒロインズ","ラブロケ"]},
 {no:15,main:["ラストノートしか知らない"],sub:["「ドライブ デート 都内」","狂想カタストロフィ","どこが好きか言って"]},
 {no:16,main:["呪って呪って"],sub:["誰にもバレずに","君の第３ボタン"]},
 {no:17,main:["絶対アイドル辞めないで"],sub:["海とレモンティー","仲直りシュークリーム"]},
 {no:18,main:["とくベチュ、して","恋人以上、好き未満"],sub:["超特急逃走中"]},
 {no:19,main:["ラブソングに襲われる"],sub:["Queens","木漏れ日メゾフォルテ"]},
 {no:20,main:["劇薬中毒"],sub:["モラトリアム","お姫様の作り方"]},
 {no:21,main:["恋、はじめました。"],sub:["夏名残サマーチューン","夢の続き"]}
];

// 曲ごとのデータ。idは "シングル番号-m番号"(表題) か "-c番号"(カップリング)
// 例: "1-m0": {video:"YouTube動画ID", lines:"0:10|歌詞|コール\n0:15|歌詞|"}
var SONG_DATA = {
  "5-m0": {video:"eHPF_qGgq9Y", lines:""}   // 探せ ダイヤモンドリリー
};

// 全曲をフラットにしたリスト(前後移動用)
var ALL = [];
SINGLES.forEach(function(s){
  s.main.forEach(function(t,i){ ALL.push({id:s.no+"-m"+i,no:s.no,title:t,kind:"main"}); });
  s.sub.forEach(function(t,i){ ALL.push({id:s.no+"-c"+i,no:s.no,title:t,kind:"sub"}); });
});
function findIndex(id){ for(var i=0;i<ALL.length;i++){ if(ALL[i].id===id) return i; } return -1; }
