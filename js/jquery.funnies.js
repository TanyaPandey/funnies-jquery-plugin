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
        "Reticulating splines...",
        "Generating witty dialog...",
        "Swapping time and space...",
        "Spinning violently around the y-axis...",
        "Tokenizing real life...",
        "Bending the spoon...",
        "Filtering morale...",
        "Don't think of purple hippos...",
        "We need a new fuse...",
        "Have a good day.",
        "640K ought to be enough for anybody",
        "The architects are still drafting",
        "The bits are breeding",
        "We're building the buildings as fast as we can",
        "Would you prefer chicken, steak, or tofu?",
        "(Pay no attention to the man behind the curtain)",
        "...and enjoy the elevator music...",
        "Please wait while the little elves draw your map",
        "Don't worry - a few bits tried to escape, but we caught them",
        "Would you like fries with that?",
        "Checking the gravitational constant in your locale...",
        "Go ahead -- hold your breath!",
        "...at least you're not on hold...",
        "Hum something loud while others stare",
        "You're not in Kansas any more",
        "The server is powered by a lemon and two electrodes.",
        "Please wait while a larger software vendor in Seattle takes over the world",
        "We're testing your patience",
        "As if you had any other choice",
        "Follow the white rabbit",
        "Why don't you order a sandwich?",
        "While the satellite moves into position",
        "The bits are flowing slowly today",
        "Dig on the 'X' for buried treasure... ARRR!",
        "It's still faster than you could draw it",
        "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
        "I should have had a V8 this morning.",
        "My other loading screen is much faster.",
        "Testing on Timmy... We're going to need another Timmy.",
        "Reconfoobling energymotron...",
        "(Insert quarter)",
        "Are we there yet?",
        "Have you lost weight?",
        "Just count to 10",
        "Why so serious?",
        "It's not you. It's me.",
        "Counting backwards from Infinity",
        "Don't panic...",
        "Embiggening Prototypes",
        "Do you come here often?",
        "Warning: Don't set yourself on fire.",
        "We're making you a cookie.",
        "Creating time-loop inversion field",
        "Spinning the wheel of fortune...",
        "Loading the enchanted bunny...",
        "Computing chance of success",
        "I'm sorry Dave, I can't do that.",
        "Looking for exact change",
        "All your web browser are belong to us"
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