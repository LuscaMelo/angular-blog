import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  id: string = "1"
  postImg: string = "assets/bmw.jpg"
  postDate: string = "April 21, 2023"
  postTitle: string = "BMW: Mauris vel odio quis velit dictum pulvinar"
  postDescription: string = "BMW ut sed lectus vitae nunc consectetur lobortis ac non ipsum. Pellentesque ligula ligula, finibus vel scelerisque. Sed libero mi, maximus elementum pulvinar vitae, pulvinar non est. Donec et porta nunc. Fusce fermentum ut neque ac sollicitudin. Morbi justo erat, mattis eu fringilla."
}
