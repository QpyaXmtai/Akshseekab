FROM fusuf/whatsasena:latest

RUN git clone https://github.com/QpyaXmtai/Akshseekab /root/Akshseekab
WORKDIR /root/Akshseekab/
RUN git clone https://github.com/jesonpro/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "bot.js"]

