class RssReaderService
  attr_accessor :url

  # https://notes.billmill.org/atom.xml
  # https://ln.ht/_/feed/~eli/rss
  # https://www.wagslane.dev/index.xml
  def initialize(url)
    @url = url
  end

  def feed_hash
    feed.as_json
    # {
    #   description: feed.description || feed.title,
    #   feed_url: feed.feed_url || url,
    #   hubs: feed.hubs,
    #   title: feed.title || feed.url,
    #   url: feed.url || url
    # }
  end

  def entries
    hashes = feed.entries.map(&:to_h)
    {
      keys: hashes.first.keys,
      entries: hashes
    }
    # feed.entries.map do |entry|
    #   {
    #     entry_id: entry.entry_id,
    #     links: entry.links,
    #     title: entry.title,
    #     published: entry.published,
    #     updated: entry.updated,
    #     content: entry.content
    #   }
    # end
  end

  def build_notes
    feed.entries.map do |entry|
      Note.create(
        description: entry.content.html_safe,
        title: entry.title,
        url: entry.links.first
      )
    end
  end

  private

  def xml
    HTTParty.get(url).body
  end

  def feed
    Feedjira.parse(xml)
  end
end
