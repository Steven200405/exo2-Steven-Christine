import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public image: string = "";

  public afficherImage(film : string){
    if(film === "avatar"){
      this.image = "avatar.jpg";
    }
    else if(film === "lilo_stitch"){
      this.image = "lilo_stitch.jpg";
    }
    else if(film === "conjuring"){
      this.image = "conjuring.jpg";
    }
    else if(film === "fast_furious"){
      this.image = "fast_furious.jpg";
    }
    else if(film === "indiana_jones"){
      this.image = "indiana_jones.jpg";
    }
  }
}
