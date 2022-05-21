var nodeParent = document.getElementById('products__container');
            const tabChansons = [
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/2.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/3.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                },
                {
                    nomArtist: "Kannierra",
                    titreChanson: "Baebae",
                    photo: "assets/img/song.png",
                    chanson: "assets/chansons/1.mp3"
                }
            ];
            
            tabChansons.forEach(song=>{
                let html = `
                <article id="article_chanson">
                    <div class="products__content">
                        <img src="${song.photo}" alt="" class="img-heigth">
                        <h3 class="products__title">${song.titreChanson}</h3>    
                        <button class="button button--flex products__button">
                            <i class="icon icon-play text-jaune button__icon"></i>
                        </button>
                        <div class="song">
                            <h3 class="products__title">${song.titreChanson}</h3> 
                            <div class="progression">
                                <div class="barre">
                                    <p class="temps"></p>
                                </div>
                                <div class="minuterie">
                                    <p class="courant_min">34s</p>
                                    <span>
                                        <i class="icon-play in_pause"></i>
                                        <i class="icon-pause in_play"></i>
                                    </span>
                                    <p class="total_min">4m</p>
                                </div>
                                <audio class="audio" src="${song.chanson}" controls></audio>
                            </div>
                        </div>
                    </div>
                </article>
                `;
                nodeParent.insertAdjacentHTML('beforeend', html);
            });

            // Essaie;
            const list_element = document.getElementById('article_chanson');//On appelle la base parent
            const pagination_element = document.getElementById('pagination');//On appelle la balise div avec la classe pagination

            let page_actuelle = 1; //Page actuelle est à 1
            let rows = 10; //Nombre d'items a afficher 
            // La fonction display a comme parametre  les éléments, emballage ou wrapper, lignes par page, et la page 
            function DisplayList(items, wrapper, rows_per_page, page) {
                wrapper.innerHTML = "";
                page--;

                let start = rows_per_page * page;
                let end = start + rows_per_page;
                let paginatedItems = items.slice(start, end);

                for (let i = 0; i < paginatedItems.length; i++) {
                    let item = paginatedItems[i];

                    let item_element = document.createElement('div');
                    item_element.classList.add('item');
                    item_element.innerText = item;

                    wrapper.appendChild(item_element);
                }
            }

            function SetupPagination(items, wrapper, rows_per_page) {
                wrapper.innerHTML = "";

                let page_count = Math.ceil(items.length / rows_per_page);
                for (let i = 1; i < page_count + 1; i++) {
                    let btn = PaginationButton(i, items);
                    wrapper.appendChild(btn);
                }
            }

            function PaginationButton(page, items) {
                let button = document.createElement('button');
                button.innerText = page;

                if (page_actuelle == page) button.classList.add('active');

                button.addEventListener('click', function () {
                    page_actuelle = page;
                    DisplayList(items, list_element, rows, page_actuelle);

                    let current_btn = document.querySelector('.pagenumbers button.active');
                    current_btn.classList.remove('active');

                    button.classList.add('active');
                });

                return button;
            }

            DisplayList(tabChansons, list_element, rows, page_actuelle);
            SetupPagination(tabChansons, pagination_element, rows);
