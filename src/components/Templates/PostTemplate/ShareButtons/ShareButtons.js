import React from "react";
import "./ShareButtons.scss";
import facebook from "super-tiny-icons/images/svg/facebook.svg";
import messenger from "super-tiny-icons/images/svg/messenger.svg";
import reddit from "super-tiny-icons/images/svg/reddit.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import linkedin from "super-tiny-icons/images/svg/linkedin.svg";
import whatsapp from "super-tiny-icons/images/svg/whatsapp.svg";
import tumblr from "super-tiny-icons/images/svg/tumblr.svg";
import pinterest from "super-tiny-icons/images/svg/pinterest.svg";
import mix from "simple-icons/icons/mix.svg";
import buffer from "super-tiny-icons/images/svg/buffer.svg";
import mewe from "simple-icons/icons/mewe.svg";
import blogger from "super-tiny-icons/images/svg/blogger.svg";
import evernote from "super-tiny-icons/images/svg/evernote.svg";
import livejournal from "simple-icons/icons/livejournal.svg";
import pocket from "super-tiny-icons/images/svg/pocket.svg";
import ycombinator from "simple-icons/icons/ycombinator.svg";
import flipboard from "simple-icons/icons/flipboard.svg";
import google from "super-tiny-icons/images/svg/google.svg";
import instapaper from "simple-icons/icons/instapaper.svg";
import diaspora from "simple-icons/icons/diaspora.svg";
import qq from "super-tiny-icons/images/svg/qq.svg";
import vk from "super-tiny-icons/images/svg/vk.svg";
import ok from "super-tiny-icons/images/svg/ok.svg";
import sinaweibo from "simple-icons/icons/sinaweibo.svg";
import douban from "simple-icons/icons/douban.svg";
import renren from "simple-icons/icons/renren.svg";
import xing from "super-tiny-icons/images/svg/xing.svg";
import threema from "super-tiny-icons/images/svg/threema.svg";
import email from "super-tiny-icons/images/svg/email.svg";
import skype from "super-tiny-icons/images/svg/skype.svg";
import line from "super-tiny-icons/images/svg/line.svg";
import telegram from "super-tiny-icons/images/svg/telegram.svg";
import mail from "super-tiny-icons/images/svg/mail.svg";
import gmail from "super-tiny-icons/images/svg/gmail.svg";
import yahoo from "super-tiny-icons/images/svg/yahoo.svg";

export default function ShareButtons({ url, title, user_id, hash_tags, text }) {
  hash_tags ??= "";
  return (
    <div id="share-buttons" className="d-flex flex-wrap">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/sharer.php?u=${url}`}
      >
        <img src={facebook} alt="facebook share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=${process.env.GATSBY_FACEBOOK_APP_ID}&display=popup&href=${url}&redirect_uri=${url}`}
      >
        <img src={messenger} alt="messenger share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://reddit.com/submit?url=${url}&title=${title}`}
      >
        <img src={reddit} alt="reddit share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${user_id}&hashtags=${hash_tags}`}
      >
        <img src={twitter} alt="twitter share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        <img src={linkedin} alt="linkedin share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send?text=${title}%20${url}`}
      >
        <img src={whatsapp} alt="whatsapp share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${text}&tags=${hash_tags}`}
      >
        <img src={tumblr} alt="tumblr share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://pinterest.com/pin/create/button/?url=${url}`}
      >
        <img src={pinterest} alt="pinterest share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://mix.com/add?url=${url}`}
      >
        <img src={mix} alt="mix share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://buffer.com/add?url=${url}&text=${text}`}
      >
        <img src={buffer} alt="buffer share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://mewe.com/share?link=${url}`}
      >
        <img src={mewe} alt="mewe share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.blogger.com/blog-this.g?u=${url}&n=${title}&t=${text}`}
      >
        <img src={blogger} alt="blogger share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.evernote.com/clip.action?url=${url}&title=${title}`}
      >
        <img src={evernote} alt="evernote share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.livejournal.com/update.bml?subject=${title}&event=${url}`}
      >
        <img src={livejournal} alt="livejournal share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://getpocket.com/edit?url=${url}`}
      >
        <img src={pocket} alt="pocket share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://news.ycombinator.com/submitlink?u=${url}&t=${title}`}
      >
        <img src={ycombinator} alt="ycombinator share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${title}&url=${url}`}
      >
        <img src={flipboard} alt="flipboard share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.google.com/bookmarks/mark?op=edit&bkmk=${url}&title=${title}&annotation=${text}&labels=${hash_tags}`}
      >
        <img src={google} alt="google share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.instapaper.com/edit?url=${url}&title=${title}&description=${text}`}
      >
        <img src={instapaper} alt="instapaper share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://share.diasporafoundation.org/?title=${title}&url=${url}`}
      >
        <img src={diaspora} alt="diaspora share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&summary=${text}`}
      >
        <img src={qq} alt="qq share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://vk.com/share.php?url=${url}&title=${title}&comment=${text}`}
      >
        <img src={vk} alt="vk share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}`}
      >
        <img src={ok} alt="ok share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}
      >
        <img src={sinaweibo} alt="sinaweibo share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.douban.com/recommend/?name=${title}&text=${text}&comment=${url}&href=${url}`}
      >
        <img src={douban} alt="douban share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://widget.renren.com/dialog/share?resourceUrl=${url}&srcUrl=${url}&title=${title}&description=${text}`}
      >
        <img src={renren} alt="renren share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.xing.com/spi/shares/new?url=${url}`}
      >
        <img src={xing} alt="xing share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`threema://compose?text=${url}%0A%0A${text}`}
      >
        <img src={threema} alt="threema share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`sms:?body=${url}%0A%0A${text}`}
      >
        <img src={email} alt="email share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://web.skype.com/share?url=${url}&text=${text}`}
      >
        <img src={skype} alt="skype share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://lineit.line.me/share/ui?url=${url}&text=${text}`}
      >
        <img src={line} alt="line share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://t.me/share/url?url=${url}&text=${url}%0A%0A${text}`}
      >
        <img src={telegram} alt="telegram share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`mailto:?subject=${title}&body=${url}%0A%0A${text}`}
      >
        <img src={mail} alt="mail share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://mail.google.com/mail/?view=cm&su=${title}&body=${url}%0A%0A${text}`}
      >
        <img src={gmail} alt="gmail share button" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://compose.mail.yahoo.com/?subject=${title}&body=${url}%0A%0A${text}`}
      >
        <img src={yahoo} alt="yahoo share button" />
      </a>
    </div>
  );
}

{
  /*
<a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer.php?u=${url}`}><img src={facebook} alt="facebook share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.facebook.com/dialog/share?app_id=${process.env.GATSBY_FACEBOOK_APP_ID}&display=popup&href=${url}&redirect_uri=${url}`}><img src={messenger} alt="messenger share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://reddit.com/submit?url=${url}&title=${title}`}><img src={reddit} alt="reddit share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${user_id}&hashtags=${hash_tags}`}><img src={twitter} alt="twitter share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}><img src={linkedin} alt="linkedin share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${title}%20${url}`}><img src={whatsapp} alt="whatsapp share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${text}&tags=${hash_tags}`}><img src={tumblr} alt="tumblr share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://pinterest.com/pin/create/button/?url=${url}`}><img src={pinterest} alt="pinterest share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://mix.com/add?url=${url}`}><img src={mix} alt="mix share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://buffer.com/add?url=${url}&text=${text}`}><img src={buffer} alt="buffer share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://mewe.com/share?link=${url}`}><img src={mewe} alt="mewe share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.blogger.com/blog-this.g?u=${url}&n=${title}&t=${text}`}><img src={blogger} alt="blogger share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.evernote.com/clip.action?url=${url}&title=${title}`}><img src={evernote} alt="evernote share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://www.livejournal.com/update.bml?subject=${title}&event=${url}`}><img src={livejournal} alt="livejournal share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://getpocket.com/edit?url=${url}`}><img src={pocket} alt="pocket share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://news.ycombinator.com/submitlink?u=${url}&t=${title}`}><img src={ycombinator} alt="ycombinator share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${title}&url=${url}`}><img src={flipboard} alt="flipboard share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.google.com/bookmarks/mark?op=edit&bkmk=${url}&title=${title}&annotation=${text}&labels=${hash_tags}`}><img src={google} alt="google share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://www.instapaper.com/edit?url=${url}&title=${title}&description=${text}`}><img src={instapaper} alt="instapaper share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://share.diasporafoundation.org/?title=${title}&url=${url}`}><img src={diaspora} alt="diaspora share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&summary=${text}`}><img src={qq} alt="qq share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://vk.com/share.php?url=${url}&title=${title}&comment=${text}`}><img src={vk} alt="vk share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}`}><img src={ok} alt="ok share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}><img src={sinaweibo} alt="sinaweibo share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://www.douban.com/recommend/?name=${title}&text=${text}&comment=${url}&href=${url}`}><img src={douban} alt="douban share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://widget.renren.com/dialog/share?resourceUrl=${url}&srcUrl=${url}&title=${title}&description=${text}`}><img src={renren} alt="renren share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://www.xing.com/spi/shares/new?url=${url}`}><img src={xing} alt="xing share button" /></a>
<a target="_blank" rel="noreferrer" href={`threema://compose?text=${url}%0A%0A${text}`}><img src={threema} alt="threema share button" /></a>
<a target="_blank" rel="noreferrer" href={`sms:?body=${url}%0A%0A${text}`}><img src={email} alt="email share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://web.skype.com/share?url=${url}&text=${text}`}><img src={skype} alt="skype share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://lineit.line.me/share/ui?url=${url}&text=${text}`}><img src={line} alt="line share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://t.me/share/url?url=${url}&text=${url}%0A%0A${text}`}><img src={telegram} alt="telegram share button" /></a>
<a target="_blank" rel="noreferrer" href={`mailto:?subject=${title}&body=${url}%0A%0A${text}`}><img src={mail} alt="mail share button" /></a>
<a target="_blank" rel="noreferrer" href={`https://mail.google.com/mail/?view=cm&su=${title}&body=${url}%0A%0A${text}`}><img src={gmail} alt="gmail share button" /></a>
<a target="_blank" rel="noreferrer" href={`http://compose.mail.yahoo.com/?subject=${title}&body=${url}%0A%0A${text}`}><img src={yahoo} alt="yahoo share button" /></a>
*/
}
