import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDefaultReturnType, IRecentSearchResult, IRequestParameters, ISearchService } from 'search-lib';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements ISearchService<IDefaultReturnType>{

  constructor(private http: HttpClient) { }
  searchApiRequest(requestParameters: IRequestParameters): Observable<IDefaultReturnType[]> {
    // let url = "";
    // url = `http://localhost:3000/search?query[match]=${requestParameters.match}&query[limit]=${requestParameters.limit}&query[limitByType]=${requestParameters.limitByType}&query[order]=${requestParameters.order}&saveInRecents=${requestParameters.saveInRecents}`;

    // if (requestParameters.source !== 'All') {
    //   url = url + `&query[sources][0]=${requestParameters.source.name}`
    // }
    // console.log(url)
    // return this.http.get<Array<IDefaultReturnType>>(url)
    return of([
      {
        "id": "42ac2faf-e98d-44db-1b7d-5f4d3e6eac7d",
        "name": "item 2",
        "description": "description 2",
        "x": "x todo 2",
        "source": "ToDo",
        "rank": 0.1
      },
      {
        "id": "46bea4c3-1a7b-57b1-d7ff-f6dcab5bce54",
        "name": "item 1",
        "description": "description 1",
        "x": "x todo 3",
        "source": "ToDo",
        "rank": 0.1
      },
      {
        "id": "55420f0c-f089-b132-a443-a9b1b2de0879",
        "name": "item 3",
        "description": "description 3",
        "x": "x todo 4",
        "source": "User",
        "rank": 0.1
      }
    ])
  }
  recentSearchApiRequest(): Observable<IRecentSearchResult[]> {
    // return this.http.get<Array<IRecentSearchResult>>(`http://localhost:3000/search/recents`)
    return of([{
      "match": "item 1",
      "limit": 20,
      "order": "",
      "limitByType": false,
      "offset": 0,
      "sources": []
    },
    {
      "match": "item 2",
      "limit": 20,
      "order": "",
      "limitByType": false,
      "offset": 0,
      "sources": []
    },
    ])
  }
}
