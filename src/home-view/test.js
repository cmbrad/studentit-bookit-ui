 Polymer({
            is: 'home-view',

            ready: function() {
                		window.addEventListener('resize', function(e) {
		  this._setLocationCardSize();
		}.bind(this));
            },

                  attached: function() {
        this._setLocationCardSize();
      },

            properties: {
                stateData: {
                    type: Array
                }
            },

                  locationNameToImage: function(name) {
        var nameDict = {
          'Architecture': 'architecture.jpg',
          'Baillieu': 'baillieu.jpg',
          'Brownless': 'brownless.jpg',
          'Burnley': 'burnley.jpg',
          'ERC': 'eastern_resource_center.jpg',
          'Frank Tate': 'frank_tate.jpg',
          'Giblin Eunson': 'giblin_eunson.jpg',
          'Law': 'law.jpg',
          'Lenton Parr': 'lenton_parr.jpg',
          'Werribee - Vet Sci': 'werribee.jpg',
        }

        return name in nameDict ? nameDict[name] : 'default.jpg';
      },

            _setLocationCardSize: function() {
					var width = 220;
					var height = 160;

					var outerPadding = this.paddingCollapsed ? 12 : 96;
					// Add 6 for margin between cards
					var extra = this.calcCardSize(window.innerWidth, outerPadding, width + 6);

					var totalWidth = width + extra;
					var totalHeight = height;
					
					this.style.width = 'auto';
					this.customStyle['--paper-card-header-image'] = 'width: ' + String(totalWidth) + 'px; height: ' + String(totalHeight) + 'px; filter: brightness(60%);';

					this.updateStyles();
			},

			calcCardSize: function(windowWidth, outerPadding, cardWidth) {
					var availableSpace = windowWidth - outerPadding;
					var cardsPerRow = Math.floor(availableSpace / cardWidth);
					// looks like something somewhere isn't rounding properly.
					// Take off 1 to be safe
					var emptySpace = availableSpace % cardWidth - 1;

					return Math.floor(emptySpace / cardsPerRow);
			}
        });