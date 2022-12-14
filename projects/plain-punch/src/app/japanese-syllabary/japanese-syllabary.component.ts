import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { marked } from 'marked';

let markdownText = `
## 五十音図 ごじゅうおんず

| | あ段 | い段 | う段 | え段 | お段 |
| - | - | - | - | - | - |
| あ行 |あア a |いイ i |うウ u|えエ e|おオ o|
| か行 |かカ ka|きキ ki|くク ku|けケ ke|こコ ko|
| さ行 |さサ sa|しシ shi/si|すス su|せセ se|そソ so|
| た行 |たタ ta|ちチ chi/ti|つツ tsu/tu|てテ te|とト to|
| な行 |なナ na|にニ ni|ぬヌ nu|ねネ ne|のノ no|
| は行 |はハ ha|ひヒ hi|ふフ fu/hu|へヘ he|ほホ ho|
| ま行 |まマ ma|みミ mi|むム mu|めメ me|もモ mo|
| や行 |やヤ ya| |ゆユ yu| |よヨ yo|
| ら行 |らラ ra|りリ ri|るル ru|れレ re|ろロ ro|
| わ行 |わワ wa|   |   |  |をヲwo|
| 拨音 |んン n|||||
`

@Component({
	selector: 'app-japanese-syllabary',
	templateUrl: './japanese-syllabary.component.html',
	styleUrls: ['./japanese-syllabary.component.scss']
})
export class JapaneseSyllabaryComponent implements OnInit {

	constructor() { }

	@ViewChild('markdownContent', { static: true })
	markdownContent!: ElementRef<HTMLDivElement>

	ngOnInit(): void {
		this.markdownContent.nativeElement.innerHTML = marked.parse(markdownText)
	}

}
