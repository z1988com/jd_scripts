/*
 *Progcessed By JSDec in 0.01s
 *JSDec - JSDec.js.org
 */
function openMH(bookId, linkId, path) {
    var _0x143f2b = {
        'TuovZ': function _0x2d6b6f(_0x43b28b, _0x29a6b9) {
            return _0x43b28b + _0x29a6b9;
        },
        'Bcvnl': function _0x1f0fe8(_0x58dc01, _0x56a481) {
			
            return _0x58dc01 + _0x56a481;
        },
        'RJKpA': function _0x4e7c73(_0x7f4e6c, _0x2310a2) {
            return _0x7f4e6c + _0x2310a2;
        },
        'tYvHU': function _0x20870f(_0xe7d15, _0x4f3425) {
            return _0xe7d15 + _0x4f3425;
        },
        'PbDjW': '/play?linkId=',
        'cZWal': '&bookId=',
        'ZQajp': function _0x3d4647(_0x40bafb, _0x377f12) {
            return _0x40bafb(_0x377f12);
        }
    };
    var host = window['location']['host'];
    var protocol = document['location']['protocol'];
    var url = _0x143f2b['TuovZ'](_0x143f2b['Bcvnl'](_0x143f2b['Bcvnl'](_0x143f2b['Bcvnl'](_0x143f2b['RJKpA'](_0x143f2b['tYvHU'](protocol + '//', host), _0x143f2b['PbDjW']) + linkId, _0x143f2b['cZWal']) + bookId, '&path='), path), '&key=') + _0x143f2b['ZQajp'](Encrypt, linkId);
    window['location'] = url;
}

function Encrypt(_0x157851) {
    var _0x36c4b0 = {
        'GikQP': function _0x4e097b(_0x1c0739, _0x2d281b) {
            return _0x1c0739 + _0x2d281b;
        },
        'yAZXg': 'defg12',
        'tDppi': 'cdefefga',
        'okkgt': '12cdefgabc'
    };
    var _0x3dfce5 = '10|1|0|9|7|6|4|2|3|8|5' ['split']('|'),
        _0x4bbc59 = 0x0;
    while (!![]) {
        switch (_0x3dfce5[_0x4bbc59++]) {
            case '0':
                var _0x260583 = 'fg12';
                continue;
            case '1':
                var _0xb14205 = 'efga';
                continue;
            case '2':
                var _0x149db8 = CryptoJS['enc']['Utf8']['parse'](_0x36c4b0['GikQP'](_0x49eef0, _0x330991));
                continue;
            case '3':
                var _0x1ca75a = CryptoJS['enc']['Utf8']['parse'](_0x157851);
                continue;
            case '4':
                var _0x4b70eb = CryptoJS['enc']['Utf8']['parse'](_0x36c4b0['GikQP'](_0xb14205, _0x25ca91));
                continue;
            case '5':
                return _0x42dbb6['toString']();
            case '6':
                var _0x330991 = _0x36c4b0['yAZXg'];
                continue;
            case '7':
                var _0x3a29de = _0x36c4b0['tDppi'];
                continue;
            case '8':
                var _0x42dbb6 = CryptoJS['AES']['encrypt'](_0x1ca75a, _0x149db8, {
                    'mode': CryptoJS['mode']['ECB'],
                    'padding': CryptoJS['pad']['Pkcs7']
                });
                continue;
            case '9':
                var _0x25ca91 = 'cdefg';
                continue;
            case '10':
                var _0x49eef0 = _0x36c4b0['okkgt'];
                continue;
        }
        break;
    }
};
(function(_0x55a659, _0x178929, _0x2fe159) {
    var _0xd3e5c8 = {
        'ZkgXI': function _0x20e052(_0x5c9728, _0x26a8fe) {
            return _0x5c9728 !== _0x26a8fe;
        },
        'bQqLM': 'undefined',
        'XGKlE': function _0x3a0602(_0x55d3bb, _0x71106b) {
            return _0x55d3bb === _0x71106b;
        },
        'yWqoD': function _0x25f76e(_0x41982a, _0x2d4a8f) {
            return _0x41982a + _0x2d4a8f;
        },
        'lbepa': '版本号，js会定期弹窗，还请支持我们的工作',
        'QNbAT': '删除版本号，js会定期弹窗'
    };
    _0x2fe159 = 'al';
    try {
        _0x2fe159 += 'ert';
        _0x178929 = encode_version;
        if (!(_0xd3e5c8['ZkgXI'](typeof _0x178929, _0xd3e5c8['bQqLM']) && _0xd3e5c8['XGKlE'](_0x178929, 'jsjiami.com.v5'))) {
            _0x55a659[_0x2fe159](_0xd3e5c8['yWqoD']('删除', _0xd3e5c8['lbepa']));
        }
    } catch (_0x4b2ee6) {
        _0x55a659[_0x2fe159](_0xd3e5c8['QNbAT']);
    }
}(window));;
encode_version = 'jsjiami.com.v5';