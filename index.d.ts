declare namespace Validate {
    function isUrl(str): boolean;

    function isChineseName(str): boolean;

    function isChinese(str): boolean;

    function isUserName(str): boolean;

    function isEmail(str): boolean;

    function isMobile(str): boolean;

    function isPassword(str): boolean;

    function isIdCardNo(idCard): boolean;
}

export = Validate;
