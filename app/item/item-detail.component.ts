import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TNSPlayer } from 'nativescript-audio';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-details',
  moduleId: __filename,
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  play() {
    const player = new TNSPlayer();
    player.initFromUrl({
      audioFile: 'http://www.noiseaddicts.com/samples_1w72b820/2514.mp3',
      loop: false
    });
    player.play();
  }
}
