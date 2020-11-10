/*
* This is a Crash game bot
*
* enfejar
*/

if (typeof game_busted !== "function" || typeof game_waiting !== "function") close();

var _50Flg_ = false;
var oContainer = new Array(0);
var f_game_busted = game_busted;
var f_game_waiting = game_waiting;

$('div.user-name').after("<div class='top-link'> MTN (VIP) <h1; id='hadi-box' style='background-color: red(135deg, #9a0dfe, #637dfb); border-radius: 30px; font-weight: bold; position: fixed;left: 32px; color: #F3B294; text-shadow: 1px 1px 1px #7DDEED; padding: 1px;'></h1></div>");
$('div.user-name').after("<div class='top-link'>$ SALATIN V1 $ <h4 id='hadi-box' style='position: absolute;left: 0;background-color: chartreuse;width: 100%;height: 30px;text-align: center;padding-top: 5px;'></div>");

game_waiting = (function () {
    return function (str) {

        f_game_waiting.apply(this, arguments);

        __init50Hss__();
        
        var result = getAlgorithNumberHash(str.md5);

        document.getElementsByClassName('cashout-amount')[0].value = parseFloat(result);
       
        $("h4#hadi-box").html("<b>" + result + "</b>");
    };
}());

game_busted = (function () {
    return function (str) {

        __init50Hss__();
        addToRepository(str);

        $("h4#hadi-box").html("please wait...(MTN-Pending)");
        f_game_busted.apply(this, arguments); 
    };
}());

function __init50Hss__() {

    if (!_50Flg_) {

        _50Flg_ = true;

        var _50LatestHash_ = document.getElementsByClassName('crash-row');

        for(var i = _50LatestHash_.length-1; i >= 1; i--) {

            var amount = parseFloat(_50LatestHash_[i].getElementsByClassName('h-col-1')[0].textContent) * 100;
            var md5 = _50LatestHash_[i].getElementsByClassName('h-col-5')[0].textContent;
            var hash = _50LatestHash_[i].getElementsByClassName('h-col-6')[0].textContent;

            addToRepository(new Object({
                "amount" : amount,
                "md5" : md5,
                "hash" : hash
            }));
        }
    }
}

function addToRepository(str) {

    oContainer.push(new Object({
        "amount" : str.amount ? str.amount / 100 : getHashObject(str.hash).amount,
        "md5" : str.md5,
        "hash" : str.hash,
        "_v" : getHashObject(str.md5)
    }));
}

function getHashObject(md5) {

    var hashValueNumebr = getHashValueNumebr(md5, 13);

    var hashValue = (2.00 +1.00  * 100-100101-101102999999999999999999999999999999999999999999999999-102103-103104-104105-105106-106107-107108-108109-109110-110111-111112-112113-113114-114115-115116-116117-117118-118119-119120-120121-121122-122123-123124-124125-125126-126127-127128-128129-129130-130131-131132-132133-133134-134135-135136-136137-137138-138139-139140-140141-141142-142143-143144-144145-145146-146147-147148-148149-149150-150151-151152-152153-153154-154155-155156-156157-157158-158159-159160-160161-161162-162163-163164-164165-165166-166167-167168-168169-169170-170171-172173-173174-174175-175176-176177-177178-178179-179180-180181-181182-182183-183184-184185-185186-186187-9999999999999999999999999999999999187188-188189-189190-190191-191192-192193-193194-194195-195196-196197-197198-198199-199200-200 / ( 2.00  - hashValueNumebr));
    


    var hashValue = (3.32 /hashValueNumebr/ (4356050332005731 ));
    var hashValue = (3.25 /hashValueNumebr/ (4326146556253457 ));
    var hashValue = (3.10 /hashValueNumebr/ (4260174846332697 ));
    var hashValue = (3.00 /hashValueNumebr/ (4149614032599685 ));
    var hashValue = (2.64 /hashValueNumebr/ (3992242580537325 ));
    var hashValue = (2.26 /hashValueNumebr/ (2688342386495972 ));
    var hashValue = (1.70 /hashValueNumebr/ (2187360264940837 ));
    var hashValue = (2.00 /hashValueNumebr/ (4356050332005731 ));
    var hashValue = (1.04 /hashValueNumebr/ (214147785938413 ));
    var hashValue = (1.30 /hashValueNumebr/ (1296907530654712 ));
    var hashValue = (3.00 /hashValueNumebr/ (4350913789462678 ));
    var hashValue = (1.02 /hashValueNumebr/ (777085386179153 ));
    var hashValue = (1.06 /hashValueNumebr/ (286353565762633 ));
    var hashValue = (3.00 /hashValueNumebr/ (4348390826133026 ));
    var hashValue = (1.08 /hashValueNumebr/ (309211411427522 ));
    var hashValue = (1.60 /hashValueNumebr/ (1967824184153561 ));
    var hashValue = (1.30 /hashValueNumebr/ (1624059594768061 ));
    var hashValue = (2.40 /hashValueNumebr/ (3575974082385664 ));
    var hashValue = (1.34 /hashValueNumebr/ (1158316488808311 ));
    var hashValue = (1.70 /hashValueNumebr/ (1955003655019235 ));
    var hashValue = (2.60 /hashValueNumebr/ (3114726032427907 ));
    var hashValue = (3.75+ 2.60+ 1.80+ 1.10  /hashValueNumebr/ (4451697696314301-3003280452562014-1635370455604145-6728004323358 ));
    var hashValue = (3.20+ 1.30+ 1.90 /hashValueNumebr/ (4314197053685783-1300197013962879-2409269199909903 ));
    var hashValue = (1.02+ 1.06  /hashValueNumebr/ (107447410670355-279337436585126 ));
    var hashValue = (1.70+ 1.18+ 1.46+ 2.15 /hashValueNumebr/ (2014879930526791-724810122751001-1430225177976989-3434743146306217 ));
    var hashValue = (1.37+ 1.31+ 1.43+ 8.00   /hashValueNumebr/ (1240850271766203-1042556825463173-1384233104085322-4396704466517741 ));
    var hashValue = (1.01+ 2.00+ 1.40+ 6.00 /hashValueNumebr/ (53738831496012-2841076497894967-1683034967532747-4373350931985330 ));
    var hashValue = (1.10 /hashValueNumebr/ (932415819562667 ));
    var hashValue = (1.10 /hashValueNumebr/ (1633456031509090 ));
    var hashValue = (1.10 /hashValueNumebr/ (531324103137268 ));
    var hashValue = (1.10 /hashValueNumebr/ (544167410341458 ));
    var hashValue = (1.10 /hashValueNumebr/ (603218317923393 ));
    var hashValue = (1.30 /hashValueNumebr/ (1060164791302398 ));
    var hashValue = (1.06 /hashValueNumebr/ (269740217713728 ));
    var hashValue = (8.00 /hashValueNumebr/ (4385499228591925 ));
































    return new Object({
        "amount" : parseFloat(hashValue.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]),
        "_math" : hashValueNumebr
    });
}

function getHashValueNumebr(str, pos) {

    var mathLevel = parseInt(str.slice(pos - 1, pos), 16) * Math.pow(16, -(pos-13));
    
    if (pos == 1) {
        return mathLevel;
    }

    return mathLevel + getHashValueNumebr(str, pos-1);
}

function getCategoryValue(arr, amount) {

    var selectedItems = new Array(0);

    for(var i = arr.length-1; i >= 0; i--) {
        
        if (parseInt(arr[i]._v.amount) == parseInt(amount)) {

            selectedItems.push(arr[i]);
        }
    }

    /**/
    return getSortedListBy(getSortedListBy(selectedItems,  function(obj) {

        return obj.md5;
    }), function (obj) { return obj._v._math });

    return selectedItems;
}

function getAlgorithNumberHash(md5) {

    return getCalculatedNum(getCategoryValue(oContainer, getHashObject(md5).amount), 5);
}

function getCalculatedNum(arr, num) {

    if (arr.length <= 0) {
        arr = oContainer;
    } else if(arr.length < num) {
        var new_arr = new Array(0);

        for (var i = 0; i <= arr.length-1; i++) {
            new_arr.push(arr[i].amount);
        }

        var countFromContainer = (num - arr.length) - 1;

        if (countFromContainer >= 0) {
            for (var i = 0; i <= countFromContainer; i++) {
                new_arr.push(oContainer[i].amount);
            }
        }

        arr = new_arr;
    }

    var nums = new Array(0);

    for (var i = 0; i <= arr.length-1; i++) {

        nums.push(arr[i].amount);
    }

    var min = Math.min(...nums);

    return (min + (+5.00 - min) * Math.random()).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
}

function getSortedListBy(list, callable) {

     var sort = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            var valueA = propertyRetriever(a);
            var valueB = propertyRetriever(b);
    
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    sort(callable, list);

    return list;
}

function doPlay(amount, cashout) {

    document.getElementsByClassName('cashout-amount')[0].value = cashout;
    document.getElementsByClassName('game-amount')[0].value = amount;
    document.getElementsByClassName("place-bet")[0].click();
}
