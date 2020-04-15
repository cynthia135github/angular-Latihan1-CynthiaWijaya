import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Latihan 1';

 
  a = 0;
  b = 0;
  output = [];
  total = 0;
  temp = "";
  t = "";
  countbundar = 0;
  countbintang = 0;
  sizeoutput = 0;
  klikButton(){
    this.total = 1;
    this.output
    for(var i = 1; i <= this.b; i++ )
    {
        this.total = this.total*this.a;
    }

    if(this.total%2 == 0){
        for(var i=this.b; i<=this.total; i++){
          this.temp = "";
          for(var j=1; j<=i; j++)
          {
            this.temp += "*";
            
          }
            this.output.push(this.temp);
            this.sizeoutput += 1;
        }

    }
    else if(this.total%2 == 1)
    {
       
        this.countbundar = 1;
        this.countbintang = this.b;
        for(var i=1; i<=this.b; i++)
        {
            this.t = "";
            for(var j=1; j<=this.countbintang;j++)
            {
              this.t += "*";
            }
            this.countbintang -= 1;
            if(this.countbundar <= this.a)
            {
                  for(var k=1; k<=this.countbundar; k++)
                  {
                     this.t += "O";
                  }
                  this.countbundar += 1;
            }
            else{
              this.t += "";
            }
            this.output.push(this.t);
        } 

    }
  }

  clear(){
    this.a = 0;
    this.b = 0;
    this.total = 1;
    for(var a=0; a<this.sizeoutput ; a++)
    {
        this.output.pop();
    }
  }
}
