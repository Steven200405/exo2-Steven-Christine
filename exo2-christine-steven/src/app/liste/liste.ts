import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public titre: string = "";
  public image: string = "";
  public filmsList = [
    {titre:'Avatar', image:'avatar.jpg'},
    {titre:'Lilo & Stitch', image:'lilo_stitch.jpg'},
    {titre:'Conjuring', image:'conjuring.jpg'},
    {titre:'Fast & Furious', image:'fast_furious.jpg'},
    {titre:'Indiana Jones', image:'indiana_jones.jpg'}
  ];

  public afficherFilm(titre : string, image: string){
    this.titre = titre;
    this.image = image;
  }

}
