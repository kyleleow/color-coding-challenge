import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-coding-challenge';

  colorArray: any[] = [
    {color: [0,0,0]},
    {color: [0,0,0]},
    {color: [0,0,0]},
    {color: [0,0,0]}
  ]

  onTileClick(tileIndex: number) {
    let currentTileColor = this.colorArray[tileIndex].color;

    if (currentTileColor.toString() == '255,255,255') return

    currentTileColor.unshift(255);
    currentTileColor = currentTileColor.slice(0,3);
    this.updateTileColor(tileIndex, currentTileColor);
    this.updateOtherTile(tileIndex);
        
  }

  updateOtherTile(excludeTileIndex: number) {
    this.colorArray.forEach((currentTile, index) => {
      if (index !== excludeTileIndex && currentTile.color.toString() !== '0,0,0') {
        currentTile.color.unshift(0);
        currentTile.color = currentTile.color.slice(0, 3);
        this.updateTileColor(index, currentTile.color);
      }
    })
  }

  updateTileColor(tileIndex: number, newColor: any[]) {
    this.colorArray[tileIndex].color = newColor;
  }
}
