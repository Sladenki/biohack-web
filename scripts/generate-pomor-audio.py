"""Generate Pomor-dialect demo audio via Microsoft Edge TTS."""

import asyncio
from pathlib import Path

import edge_tts

OUT_DIR = Path(__file__).parent.parent / "public" / "audio"
VOICE = "ru-RU-DmitryNeural"

RECORDINGS: dict[str, dict[str, str]] = {
    "pomor-guide.mp3": {
        "rate": "-14%",
        "pitch": "-10Hz",
        "text": (
            "Эй, путник, здорово тебе! Я, старик-помор, поведаю про наш водорослевый промысел. "
            "Белое море — то наше поле, только водяное. Ламинарию збираем на отмелях, "
            "когда отлив большой. На бережок тащим, сушим на ветру, в чанах варим — "
            "и на зиму прокормимся. "
            "Было время — весь берег дымом стоял от сушилок. Поморы каждый заливчик знали, "
            "каждый камешек. Море кормит, да только уваженье к нему подавай. "
            "А нынче слушай внимательно: пойдёшь по маршруту — и сам увидишь, "
            "как мы жили у самой кромки воды."
        ),
    },
    "quote-seaweed.mp3": {
        "rate": "-12%",
        "pitch": "-8Hz",
        "text": (
            "Водоросли — то наше хлебное полё на море. "
            "Вовремя соберёшь — зиму с душой проживёшь."
        ),
    },
    "quote-drying.mp3": {
        "rate": "-12%",
        "pitch": "-8Hz",
        "text": (
            "На отмели стояли сушилки, дым шёл столбом. "
            "Поморский дух тама и живёт — в этом дыме да в соли."
        ),
    },
    "quote-shore.mp3": {
        "rate": "-12%",
        "pitch": "-8Hz",
        "text": (
            "Море кормит, да и учит уваженью. "
            "Каждый камень на берегу — память предков наших."
        ),
    },
}


async def generate_file(name: str, config: dict[str, str]) -> None:
    communicate = edge_tts.Communicate(
        config["text"],
        VOICE,
        rate=config["rate"],
        pitch=config["pitch"],
    )
    output = OUT_DIR / name
    await communicate.save(str(output))
    print(f"Created {output} ({output.stat().st_size} bytes)")


async def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, config in RECORDINGS.items():
        await generate_file(name, config)


if __name__ == "__main__":
    asyncio.run(main())
