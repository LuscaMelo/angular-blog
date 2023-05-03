import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postImg: string = ""
  postDate: string = ""
  postTitle: string = ""
  postDescription: string = ""
  private id: string | null = ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)

    window.scrollTo(0, 0)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    console.log(result)

    this.id = result.id
    this.postTitle = result.postTitle
    this.postDate = result.postDate
    this.postImg = result.postImg
    this.postDescription = result.postDescription
  }
}
