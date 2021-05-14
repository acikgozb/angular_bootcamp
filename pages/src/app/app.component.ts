import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 1;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 2',
      url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 3',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 4',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'At the beach 5',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ];

  checkWindowIndex(imageIndex: number): boolean {
    return Math.abs(this.currentPage - imageIndex) < 5;
  }
}
