// Namespace
if (!$d) {
    var $d = {};
}

/**
 * Funnies
 * Make users laugh when your app loads.
 * 
 * Port from 1egoman/funnies.
 *
 * @param {string|object} selector
 * @param {object} options
 * @returns {Funnies}
 *
 * @licence MIT
 * @author odan
 */
$d.Funnies = function (selector, options) {

    var $this = this;
    this.el = $(selector);
    this.state = 0;
    this.currentIndex = 0;
    this.messages = [];

    this.defaultMessages = [
        "Generating witty dialog...",
        "Swapping time and space...",
        "Spinning violently around the y-axis...",
        "We need a new fuse...",
        "The bits are breeding...",
        "Please wait while the little elves draw your webpage.",
        "Don't worry - a few bits tried to escape, but we caught them.",
        "Would you like fries with that?",
        "The server is powered by a lemon and two electrodes.",
        "Why don't you order a sandwich?",
        "While the satellite moves into position",
        "The bits are flowing slowly today",
        "My other loading screen is much faster.",
        "Are we there yet?",
        "Counting backwards from Infinity",
        "Do you come here often?",
        "Calculating meaning of life....",
        "This would go faster if I had opposable thumbs...",
        "This page was crafted from only the finest ascii...",
        "Unpacking data package...",
        "Preparing the Matrix",
        "Overloading...",
        "Calculating the odds...",
        "Dusting off spellbooks...",
        "Our magic is slower than usual today...",
        "Buckle up, travelling through time...",
        
    ];

    // default options
    this.options = $.extend({
        interval: 8000,
        customMessages: [],
        defaultMessages: $this.defaultMessages
    }, options);

    /**
     * Constructor
     * 
     * @returns {void}
     */
    this.init = function () {
        // shuffle random messages
        $this.messageIndex = 0;
        if ($this.options.customMessages.length > 0) {
            $this.messages = $this.shuffle($this.options.customMessages);
        } else {
            $this.messages = $this.shuffle($this.options.defaultMessages);
        }
    };

    /**
     * Pick the next message
     * 
     * @returns {String}
     */
    this.message = function () {
        if ($this.messageIndex >= $this.messages.length) {
            $this.messageIndex = 0;
        }
        var result = $this.messages[$this.messageIndex];
        $this.messageIndex++;
        return result;
    };

    /**
     * Encode to html
     * 
     * @param {String} value
     * @returns {String}
     */
    this.encodeHtml = function (value) {
        return $('<div/>').text(value).html();
    };

    /**
     * Render html content
     * @returns {String}
     */
    this.render = function () {
        var result = '<div class="funnies">';
        result += '<h1 class="funnies-header">Loading...</h1>';
        result += '<span class="funnies-text">';
        result += $this.encodeHtml($this.message());
        result += '</span>';
        result += '</div>';
        return result;
    };

    /**
     * Show funny loader
     * 
     * @returns {void}
     */
    this.show = function () {
        $($this.el).html($this.render());
        $this.state = setInterval(function () {
            $($this.el).html($this.render());
        }, $this.options.interval);
    };

    /**
     * Hide funny loader
     * 
     * @returns {void}
     */
    this.hide = function () {
        $($this.el).html('');
        $($this.el).hide();
        clearInterval($this.state);
    };

    /**
     * Shuffle random array
     * 
     * @param {Array} array
     * @returns {Array}
     */
    this.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    this.init();
};

// jQuery plugin adapter (jpa)
$.fn.funnies = function (options) {
    return this.each(function () {
        $(this).data('funnies', new $d.Funnies(this, options));
    });
};
