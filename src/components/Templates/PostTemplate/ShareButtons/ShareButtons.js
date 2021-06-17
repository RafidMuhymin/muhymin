import React from "react";
import "./ShareButtons.scss";

export default function ShareButtons({
  url,
  app_id,
  page_type,
  redirect_url,
  title,
  user_id,
  hash_tags,
  phone_number,
  text,
}) {
  hash_tags ??= "";
  return (
    <div id="share-buttons" className="d-flex flex-wrap">
      <a target="_blank" href={`https://www.facebook.com/sharer.php?u=${url}`}>
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.facebook.com/dialog/share?app_id=${app_id}&display=popup&href=${url}&redirect_uri=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://reddit.com/submit?url=${url}&title=${title}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${user_id}&hashtags=${hash_tags}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?text=${title}%20${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${text}&tags=${hash_tags}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://pinterest.com/pin/create/button/?url=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a target="_blank" href={`https://mix.com/add?url=${url}`}>
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://buffer.com/add?url=${url}&text=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a target="_blank" href={`https://mewe.com/share?link=${url}`}>
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.blogger.com/blog-this.g?u=${url}&n=${title}&t=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.evernote.com/clip.action?url=${url}&title=${title}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://www.livejournal.com/update.bml?subject=${title}&event=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a target="_blank" href={`https://getpocket.com/edit?url=${url}`}>
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://news.ycombinator.com/submitlink?u=${url}&t=${title}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${title}&url=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.google.com/bookmarks/mark?op=edit&bkmk=${url}&title=${title}&annotation=${text}&labels=${hash_tags}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://www.instapaper.com/edit?url=${url}&title=${title}&description=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://share.diasporafoundation.org/?title=${title}&url=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&summary=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://vk.com/share.php?url=${url}&title=${title}&comment=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://www.douban.com/recommend/?name=${title}&text=${text}&comment=${url}&href=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://widget.renren.com/dialog/share?resourceUrl=${url}&srcUrl=${url}&title=${title}&description=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://www.xing.com/spi/shares/new?url=${url}`}
      >
        <img src="/logo.svg" />
      </a>
      <a target="_blank" href={`threema://compose?text=${url}%0A%0A${text}`}>
        <img src="/logo.svg" />
      </a>
      <a target="_blank" href={`sms:?body=${url}%0A%0A${text}`}>
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://web.skype.com/share?url=${url}&text=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://lineit.line.me/share/ui?url=${url}&text=${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://t.me/share/url?url=${url}&text=${url}%0A%0A${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`mailto:?subject=${title}&body=${url}%0A%0A${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`https://mail.google.com/mail/?view=cm&su=${title}&body=${url}%0A%0A${text}`}
      >
        <img src="/logo.svg" />
      </a>
      <a
        target="_blank"
        href={`http://compose.mail.yahoo.com/?subject=${title}&body=${url}%0A%0A${text}`}
      >
        <img src="/logo.svg" />
      </a>
    </div>
  );
}

{
  /*
<a target="_blank" href={`https://www.facebook.com/sharer.php?u=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.facebook.com/dialog/share?app_id=${app_id}&display=popup&href=${url}&redirect_uri=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://reddit.com/submit?url=${url}&title=${title}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${user_id}&hashtags=${hash_tags}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://api.whatsapp.com/send?text=${title}%20${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${text}&tags=${hash_tags}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://pinterest.com/pin/create/button/?url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://mix.com/add?url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://buffer.com/add?url=${url}&text=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://mewe.com/share?link=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.blogger.com/blog-this.g?u=${url}&n=${title}&t=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.evernote.com/clip.action?url=${url}&title=${title}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://www.livejournal.com/update.bml?subject=${title}&event=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://getpocket.com/edit?url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://news.ycombinator.com/submitlink?u=${url}&t=${title}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${title}&url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.google.com/bookmarks/mark?op=edit&bkmk=${url}&title=${title}&annotation=${text}&labels=${hash_tags}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://www.instapaper.com/edit?url=${url}&title=${title}&description=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://share.diasporafoundation.org/?title=${title}&url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&summary=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://vk.com/share.php?url=${url}&title=${title}&comment=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://www.douban.com/recommend/?name=${title}&text=${text}&comment=${url}&href=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://widget.renren.com/dialog/share?resourceUrl=${url}&srcUrl=${url}&title=${title}&description=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://www.xing.com/spi/shares/new?url=${url}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`threema://compose?text=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`sms:?body=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://web.skype.com/share?url=${url}&text=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://lineit.line.me/share/ui?url=${url}&text=${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://t.me/share/url?url=${url}&text=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`mailto:?subject=${title}&body=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`https://mail.google.com/mail/?view=cm&su=${title}&body=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
<a target="_blank" href={`http://compose.mail.yahoo.com/?subject=${title}&body=${url}%0A%0A${text}`}><img src="/logo.svg" /></a>
*/
}
